const mysql = require('mysql');
const debug = require('debug');
const { md5, getDefer } = require('dwing-common');

const db = {};
/**
 * 创建连接
 * @param  {obj} options MySQL连接参数
 * @return {obj} MySQL Connection
 */
/* eslint no-console: 0 */
module.exports = async function createConnection(options, logger = console.log) {
  const key = md5(JSON.stringify(options));
  if (!db[key]) {
    db[key] = mysql.createConnection(options);
  }

  const result = {};

  try {
    result.query = (sql) => {
      debug('wulian:mysql:query')(sql);
      const deferred = getDefer();
      db[key].query(sql, (err, rows) => {
        if (err) {
          logger('wulian:mysql:query', err);
          deferred.resolve({});
        }
        deferred.resolve(rows);
      });
      return deferred.promise;
    };
  } catch (err) {
    result.query = () => null;
  }
  return result;
};
