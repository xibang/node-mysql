const mysql = require('mysql');
const debug = require('debug');
const { md5 } = require('@dwing/common');
const { promisify } = require('util');

const db = {};
/**
 * 创建连接
 * @param  {obj} options MySQL连接参数
 * @return {obj} MySQL Connection
 */
/* eslint no-console: 0 */
module.exports = (options = {}) => {
  const key = md5(JSON.stringify(options));
  if (!db[key]) {
    db[key] = mysql.createConnection(options);
  }

  const result = {};
  const promiseFn = promisify(db[key].query).bind(db[key]);
  result.query = (sql) => {
    debug('dwing:mysql:query')(sql);
    return promiseFn(sql);
  };
  return result;
};
