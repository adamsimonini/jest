const obj = require('../02-be-vs-equal');

test('Are two euqal objects identical?', () => {
  expect(obj.obj1).toBe(obj.obj2); // will fail
});

test('Are two euqal objects equal?', () => {
  expect(obj.obj1).toEqual(obj.obj2); // will pass
});