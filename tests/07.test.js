// https://app.pluralsight.com/guides/test-asynchronous-code-jest 
const initialize = require('../07-promises');

// Get just to listen for triggering of console.log(), and to replace it with a mock function that does nothing
// jest.spyOn(console, 'log').mockImplementation(jest.fn());

test(`Do I get back an array from initialize?`, () => {
  return initialize.then(coreData => {
    expect(coreData).toBeInstanceOf(Array);
  })
});