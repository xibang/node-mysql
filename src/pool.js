const mysql = require('mysql');
const debug = require('debug');
const { md5, getDefer } = require('@dwing/common');

const db = {};

const createPool = (key, options) => {
  db[key] = mysql.createPool(options);
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
  result.query = (sql, returnFields = false) => {
    debug('dwing:mysql:query')(sql);
    const deferred = getDefer();
    db[key].query(sql, [], (errQuery, rows, fields) => {
      // return object back to pool
      if (errQuery) {
        console.log(errQuery.code);
        console.log(errQuery.message);
        logger('dwing:mysql:query', JSON.stringify(errQuery, null, 2));
        deferred.reject(errQuery);
      }
      if (returnFields) {
        deferred.resolve({rows, fields});
      } else {
        deferred.resolve(rows);
      }
    });
    return deferred.promise;
  };

  return result;
};
