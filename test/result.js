const test = require('ava');
const { operationResult, selectedCount } = require('..');

test('operationResult', async (t) => {
  t.is(operationResult({ affectedRows: 1 }), 1);
  t.is(operationResult({ affectedRows: 0 }), 0);
  t.is(operationResult([]), 0);
  t.is(operationResult({ err: 1 }), 0);
});

test('selectedCount', async (t) => {
  t.is(selectedCount({ affectedRows: 1 }), -1);
  t.is(selectedCount([]), 0);
  t.is(selectedCount([{ test: 1 }]), 1);
});
