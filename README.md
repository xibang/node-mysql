# Dwing MySQL

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Follow)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/@dwing/mysql.svg)](https://npmjs.org/package/@dwing/mysql) [![npm](https://img.shields.io/npm/dt/@dwing/mysql.svg)](https://npmjs.org/package/@dwing/mysql) [![codecov](https://codecov.io/gh/AirDwing/node-dwing-mysql/branch/master/graph/badge.svg)](https://codecov.io/gh/AirDwing/node-dwing-mysql) [![Travis-CI](https://travis-ci.org/AirDwing/node-dwing-mysql.svg?branch=master)](https://travis-ci.org/AirDwing/node-dwing-mysql) [![codebeat badge](https://codebeat.co/badges/49922bb9-ef93-4286-9fd0-3c2f0d595f3c)](https://codebeat.co/projects/github-com-airdwing-node-dwing-mysql-master)


## 安装

```
yarn add @dwing/mysql
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
