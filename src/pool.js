const mysql = require('mysql');
const debug = require('debug');
const { md5 } = require('@dwing/common');
const { promisify } = require('util');

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
module.exports = (options = {}) => {
  const key = md5(JSON.stringify(options));
  if (!db[key]) {
    createPool(key, options);
  }

  const result = {};
  const promiseFn = promisify(db[key].query).bind(db[key]);
  result.query = (sql) => {
    debug('dwing:mysql:query')(sql);
    return promiseFn(sql);
  };
  return result;
};
