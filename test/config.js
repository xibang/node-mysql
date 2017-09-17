const test = require('ava');
const { connection, pool } = require('..');

test('default config', (t) => {
  const client = connection({
    hostname: '127.0.0.1'
  });
  t.is(typeof client, 'object');
});

test('default config', (t) => {
  const client = connection();
  t.is(typeof client, 'object');
});

test('default config', (t) => {
  const client = connection();
  t.is(typeof client, 'object');
});

test('default config', (t) => {
  const client = pool({
    hostname: '127.0.0.1'
  });
  t.is(typeof client, 'object');
});

test('default config', (t) => {
  const client = pool();
  t.is(typeof client, 'object');
});

test('default config', (t) => {
  const client = pool();
  t.is(typeof client, 'object');
});
