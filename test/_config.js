module.exports = {
  hostname: '127.0.0.1',
  user: 'root',
  password: process.env.NODE_ENV === 'test' ? '' : 'root'
};
