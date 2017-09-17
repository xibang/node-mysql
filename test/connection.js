const test = require('ava');
const { connection } = require('..');
const config = require('./_config');

const client = connection(config);

test('query', async (t) => {
  const rows = await client.query('SELECT 1');
  t.is(rows.length, 1);
});
