const arr = require('../04-array-contains');

test(`Does the todos array contain it?`, () => {
  expect(arr).toContain("go bowling"); // check if string contains the expression
});

test(`Does the todos array contain it?`, () => {
  expect(arr).toContain("skiing"); // check if string contains the expression
});