const { format } = require('mysql');
const { isEmpty } = require('@xibang/node-common');

exports.pool = require('./pool');
exports.connection = require('./connection');

exports.format = format;

exports.selectedCount = result => (Array.isArray(result) ? result.length : -1);
exports.operationResult = result => (!isEmpty(result) && result.affectedRows ? result.affectedRows : 0);
