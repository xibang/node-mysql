# Wulian-MySQL

[![npm](https://img.shields.io/npm/v/wulian-mysql.svg?style=plastic)](https://npmjs.org/package/wulian-mysql) [![npm](https://img.shields.io/npm/dm/wulian-mysql.svg?style=plastic)](https://npmjs.org/package/wulian-mysql)  [![npm](https://img.shields.io/npm/dt/wulian-mysql.svg?style=plastic)](https://npmjs.org/package/wulian-mysql)

## 安装

```
npm install wulian-mysql --save
```

## 维护者

Willin: <https://github.com/willin> 求粉，求加组织

## ES7 使用

### POOL

```js
import {pool} from 'wulian-mysql';

(async(){
  // 传入配置，新建一个Pool，如果已有Pool则直接拿来使用
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  }); // 根据当前数据库配置创建一个连接
  console.log(await cn.query('SELECT 1'));
  cn.release(); // 勿忘
})();
```

### CONNECTION

```js
import {connection} from 'wulian-mysql';

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
import {pool} from 'wulian-mysql';

(async(){
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  }, console.log);
  // 第二个参数传入你自己的处理事件 默认为 console.log('wulian:mysql:query', err);
  console.log(await cn.query('SELECT 1'));
  cn.release();
})();
```

### FORMAT

```js
import {pool, format} from 'wulian-mysql';

(async(){
  const cn = await pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
  }, console.log);
  console.log(await cn.query(format('SELECT 1')));
  cn.release();
})();
```

## 测试

连接池：

```
DEBUG=wulian:mysql:* babel-node examples/pool.js
```

连接：

```
DEBUG=wulian:mysql:* babel-node examples/connection.js
```

玩命测试：

```
npm install -g pm2
npm install babel-register
cd examples
pm2 start babel.json
```

然后看 `logs` 目录下的日志
