// https://app.pluralsight.com/guides/test-asynchronous-code-jest 

const {projectOne, projectTwo} = require('../05-callbacks');

function passCourse(a, b, callback) {
  setTimeout(() => {
    const result = a - b;
    callback(result);
  }, 2500)
}

test('result is greater than 60', done => {
  passCourse(projectOne, projectTwo, sum => {
    try { // https://www.w3schools.com/js/js_errors.asp
      expect(sum).toBeGreaterThan(60);
      done(); // with done(), jest ensures this callback is hit before completing the test
    } catch (err) {
      console.log("Danger Will Robinson - danger!")
      done(err)
    }
  })
});
// by default jest will wait for 5 seconds before the test automatically fails
// by defaut, if jest invoked done() without an error, the test passes!