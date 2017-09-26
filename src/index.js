const { format } = require('mysql');
const { isEmpty } = require('@dwing/common');

exports.pool = require('./pool');
exports.connection = require('./connection');

exports.format = format;
exports.selectResult = result => (Array.isArray(result) && result.length > 0 ? result : []);
exports.operationResult = result => (!isEmpty(result) && result.affectedRows ? result.affectedRows : 0);
