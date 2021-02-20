// https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

let second = 0;
let printSeconds = () => {
  second++;
  console.log(second);
} 

let timer = new Promise((resolve, reject) => { // timer returns a promise
  var startTimer = setInterval(printSeconds, 1000)
  setTimeout(() => {
    clearInterval(startTimer);
    resolve(true)
  }, 4000);
});

let getCoreData = fetch("https://api.spacexdata.com/v3/cores").then(response => response.json()) // fetch returns a promise

const initialize = async () => {
  let timerFinished = await timer;
  console.log("Countdown completed. Making API request now.")
  let coreData = await getCoreData;
  console.log(coreData.map(core => core.core_serial));
  return coreData;
}

module.exports = initialize();
