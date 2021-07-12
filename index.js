const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = 0;

// for (let batteries of batteryBatches) {
//   totalBatteries += batteries;
// }

let totalBatteries = batteryBatches.reduce((prev, item) => {
  debugger;
  return prev + item;
}, 0);
