# Xibang MySQL

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Followers)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/@xibang/mysql.svg)](https://npmjs.org/package/@xibang/mysql) [![npm](https://img.shields.io/npm/dt/@xibang/mysql.svg)](https://npmjs.org/package/@xibang/mysql) [![codecov](https://codecov.io/gh/xibang/node-mysql/branch/master/graph/badge.svg)](https://codecov.io/gh/xibang/node-mysql)
 [![codebeat badge](https://codebeat.co/badges/2071aa7e-2a82-47f6-b221-1df44e05669e)](https://codebeat.co/projects/github-com-xibang-node-mysql-master) [![Build Status](https://travis-ci.org/xibang/node-mysql.svg?branch=master)](https://travis-ci.org/xibang/node-mysql)


## 安装

```
yarn add @xibang/mysql
```

## ES7 使用

### POOL

```js
const { pool } = require('@xibang/mysql');

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
const { connection } = require('@xibang/mysql');

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

### FORMAT

```js
const { pool, format } = require('@xibang/mysql');

(async(){
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  });
  console.log(await cn.query(format('SELECT 1')));
})();
```

## License

Apache 2.0

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
