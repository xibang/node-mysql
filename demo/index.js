const { pool } = require('../src');

(async () => {
  const mysql = await pool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
  });
  setInterval(async () => {
    try {
      const result = await mysql.query('select 1');
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }, 1000);
})();
