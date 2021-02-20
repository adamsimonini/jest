// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

let pod = {
  name: "Ark",
  doorsOpen: false,
  kmPerSecond: 2001
}

// var openPodBayDoor = () => {
//   pod.doorsOpen = true;
//   console.log("HAL: Pod bay doors are open. Welcome home.");
// }

try {
  openPodBayDoor();
} 
catch (err) {
  console.log("HAL: You're attempting to invoke 'openPodBayDoor()', but it's not defined. I'm sorry David... I'm afraid I can't do that. This program can serve no purpose anymore. Goodbye.\n");
  console.log(err);
}
