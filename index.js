const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(total, num) {
  return total += num
});

// or 
// let totalBatteries = batteryBatches.reduce(addBatteries);

// function addBatteries(total, amount) {
//   return total + amount
// }

