const loop = require('../08-mocking');

// Get just to listen for triggering of console.log(), and to replace it with a mock function that does nothing
// jest.spyOn(console, 'log').mockImplementation(jest.fn());

const mockCallback = jest.fn( /* do some stuff*/ );
// explicitly set a return value for your mock function

loop(mockCallback);

test(`Is my callback triggering appropriate?`, async () => {
  expect(mockCallback.mock.calls.length).toBe(9);
});

test(`Confirm the 3rd invocation of mockCallback is on 3`, async () => {
  expect(mockCallback.mock.calls[2][0]).toBe(3);
});