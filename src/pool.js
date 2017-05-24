const mysql = require('mysql');
const debug = require('debug');
const { md5, getDefer } = require('@dwing/common');
const genericPool = require('generic-pool');

const db = {};
const createPool = (key, options) => {
  db[key] = genericPool.createPool({
    create: () => new Promise((resolve, reject) => {
      const c = mysql.createConnection(options);
      // parameter order: err, resource
      c.connect((err) => {
        if (err) {
          reject(err);
        }
        resolve(c);
      });
    }),
    destroy: client => new Promise((resolve) => {
      client.on('end', () => {
        resolve();
      });
      client.disconnect();
    })
  },
    {
      max: options.connectionLimit || 10,
      // optional. if you set this, make sure to drain() (see step 3)
      min: options.connectionLimitMin || 0,
      // specifies how long a resource can stay idle in pool before being removed
      idleTimeoutMillis: 30000,
      // if true, logs via console.log - can also be a function
      log: process.env.DEBUG !== undefined
    });
};

/**
 * 创建连接池
 * @param  {obj} options MySQL连接参数
 * @return {obj} MySQL Pool
 */
/* eslint no-console: 0 */
module.exports = async (options, logger = console.log) => {
  const key = md5(JSON.stringify(options));
  if (!db[key]) {
    createPool(key, options);
  }

  const result = {};
  result.query = (sql) => {
    debug('dwing:mysql:query')(sql);
    const deferred = getDefer();
    db[key].acquire().then((client) => {
      client.query(sql, [], (errQuery, rows) => {
        // return object back to pool
        db[key].release(client);
        if (errQuery) {
          logger('dwing:mysql:query', errQuery);
          db[key].release();
          createPool(key, options);
          deferred.resolve({});
        }
        deferred.resolve(rows);
      });
    }).catch((err) => {
      logger('dwing:mysql:pool', err);
      deferred.resolve({});
    });
    return deferred.promise;
  };
  result.release = () => null;

  return result;
};
