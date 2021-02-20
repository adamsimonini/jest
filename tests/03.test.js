// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const {string, expression} = require('../03-reg-ex'); // destructuring assignment (i.e., destructing an object and assigning its properties to similarly named variables)

test(`Does the string contain ${expression}?`, () => {
  expect(string).toMatch(expression); // check if string contains the expression
});