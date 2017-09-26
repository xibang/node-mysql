const test = require('ava');
const { operationResult, selectResult } = require('..');

test('operationResult', async (t) => {
  t.is(operationResult({ affectedRows: 1 }), 1);
  t.is(operationResult({ affectedRows: 0 }), 0);
  t.is(operationResult([]), 0);
  t.is(operationResult({ err: 1 }), 0);
});

test('selectResult', async (t) => {
  t.is(selectResult({ affectedRows: 1 }).toString(), [].toString());
  t.is(selectResult([]).toString(), [].toString());
  t.is(selectResult([{ test: 1 }]).toString(), [{ test: 1 }].toString());
});
