// "use strict";

// const o = "w";

// const calcAge = (b) => 2040 - b;

////////////////////////////////////

// const temperature = [3, -2, -10, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperature1 = [30, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps, arrey) {
//   const newArrey = temps.concat(arrey);
//   let max = newArrey[0];
//   let min = newArrey[0];

//   for (let i = 0; i < newArrey.length; i++) {
//     if (typeof newArrey[i] !== "number") continue;
//     if (max < newArrey[i]) max = newArrey[i];
//     if (min > newArrey[i]) min = newArrey[i];
//   }

//   return max - min;
// };

// console.log(calcTempAmplitude(temperature, temperature1));

////////////////////////////////////

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         value: 10,
//     }

//     const kelvin = measurement.value + 273;
//     return kelvin
// }

// console.log(measureKelvin());

// const temperature = [3, -2, -10, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperature1 = [30, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeBug = function (temps, arrey) {
//   const newArrey = temps.concat(arrey);
//   let max = 0;
//   let min = 0;
// debugger
//   for (let i = 0; i < newArrey.length; i++) {
//     if (typeof newArrey[i] !== "number") continue;
//     if (max < newArrey[i]) max = newArrey[i];
//     if (min > newArrey[i]) min = newArrey[i];
//   }

//   console.log(max);
//   console.log(min);

//   return max - min;
// };

// console.log(calcTempAmplitudeBug([1, 2, 4], [4, 5, 6]));

////////////////////////////////////

// const arr = [17, 21, 23];
// const arra = [12, 5, -5, 0, 4];

// const concatString = function (arr) {
//   let message = "";
//   for (let i = 0; i < arr.length; i++) {
//     message += `... ${arr[i]}°C in ${i + 1} days `
//   }

//   console.log(message);
// };

// concatString(arra)

////////////////////////////////////