// https://jestjs.io/docs/en/mock-functions

const arr = [1,2,3,4,5,6,7,8,9];
const addTen = (num) => console.log(num + 10);

let loop = (arr, callback) => {
  arr.forEach(num => {
    callback(num);
  })
}

// loop(arr, addTen);

module.exports = loop;
