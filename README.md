# Dwing MySQL

[![npm](https://img.shields.io/npm/v/@dwing/mysql.svg?style=plastic)](https://npmjs.org/package/@dwing/mysql) [![npm](https://img.shields.io/npm/dm/@dwing/mysql.svg?style=plastic)](https://npmjs.org/package/@dwing/mysql)  [![npm](https://img.shields.io/npm/dt/@dwing/mysql.svg?style=plastic)](https://npmjs.org/package/@dwing/mysql)

## 安装

```
npm install @dwing/mysql --save
```

## ES7 使用

### POOL

```js
const {pool} = require('@dwing/mysql');

(async(){
  // 传入配置，新建一个Pool，如果已有Pool则直接拿来使用
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  }); // 根据当前数据库配置创建一个连接
  console.log(await cn.query('SELECT 1'));
})();
```

### CONNECTION

```js
const {connection} = require('@dwing/mysql');

(async(){
  // 传入配置，新建一个连接，，如果已有连接则直接拿来使用
  const cn = await connection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  });
  console.log(await cn.query('SELECT 1'));
})();
```

### 异常捕获

```js
const {pool} = require('@dwing/mysql');

(async(){
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  }, console.log);
  // 第二个参数传入你自己的处理事件 默认为 console.log('dwing:mysql:query', err);
  console.log(await cn.query('SELECT 1'));
})();
```

### FORMAT

```js
const {pool, format} = require('@dwing/mysql');

(async(){
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  }, console.log);
  console.log(await cn.query(format('SELECT 1')));
})();
```

## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
