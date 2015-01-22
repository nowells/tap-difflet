/* Modules */

var test = require('tape');

/* Tests */

test('1 === 1', function(assert) {
  assert.plan(1);
  assert.equal(1, 1);
});

test('2 === 2', function(assert) {
  assert.plan(1);
  assert.equal(2, 2);
});

test('multiple asserts', function(assert) {
  assert.plan(5);
  assert.equal(1, 1);
  assert.equal(1, 1);
  assert.equal(1, 1);
  assert.equal(1, 1);
  assert.equal(1, 1);
});
