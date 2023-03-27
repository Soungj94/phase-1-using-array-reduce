const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = batteryBatches.reduce(function (acc, el) {
//   return (acc += el);
// }, 0);

const totalBatteries = batteryBatches.reduce((acc, el) => (acc += el), 0);
