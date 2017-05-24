const { pool } = require('../src');

(async () => {
  const mysql = await pool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
  });  
  const result = await mysql.query('select 1');
  console.log(result);
})();