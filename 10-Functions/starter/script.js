'use strict';

///////////////////////////////////////////////////
/////////// CHALLENGE #1

////---------------------- MINE
// const poll = {
//   question: 'What is your favorite programing language?',
//   options: ['0: JavaScript', '1: Pyton', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = +prompt(
//       'What is your favorite programing language? \n 0: JavaScript \n 1: Pyton \n 2: Rust \n 3: C++ \n (Write option Number)'
//     );

//     if (
//       typeof answer === 'number' &&
//       answer < this.answers.length &&
//       answer >= 0
//     ) {
//       this.answers[answer]++;
//     } else {
//       alert('This answer option is not valid');
//     }

//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(
//         `Poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
//       );
//     }
//   },
// };

// const registerNewAnswer = poll.registerNewAnswer;
// document
//   .querySelector('.poll')
//   .addEventListener('click', registerNewAnswer.bind(poll));

// ////////bonus
// const testDATA1 = {
//   answers: [5, 2, 3],
// };
// const testDATA2 = {
//   answers: [1, 5, 3, 9, 6, 1]
// };

// const displayRes = poll.displayResults;
// displayRes.call(testDATA1)
// displayRes.call(testDATA2)

////------------------------UDEMY

// const poll = {
//   question: 'What is your favorite programing language?',
//   options: ['0: JavaScript', '1: Pyton', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}
//         \n(Wtite options number)`
//       )
//     );

//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayRes();
//     this.displayRes('string');
//   },

//   displayRes(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll results ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

/////////// CHALLENGE #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();

/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  ////ES 5
  //   numPassengers = numPassengers || 1;
  //   price = price || `99`;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  
  bookings.push(booking);
};

createBooking('LH123', 6);
createBooking('LH123', 8);
createBooking('LH123', 2);
createBooking('LH123', undefined ,200);
console.log(bookings);
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//is the same as doing ...
const flightNum = flight;
const passenger = jonas;

const newPasspott = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPasspott(jonas);
checkIn(flight, jonas);
console.log(jonas);
*/

///////////////////// Callback function

/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function(str, fn) {
    console.log(`original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`transformed by ${fn.name}`);
}

transformer('JavaScript is the Best!', upperFirstWord)
console.log('');
transformer('JavaScript is the Best!', oneWord)
*/

///////////// Function returning functoon
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// }

// const greet = (greeting) => (name) => (emoji) => console.log(`${greeting} ${name} ${emoji}`);
// greet(`Bueno`)('Sucker')(`💢💢💢`)

/////////////// The call apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on  ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flights: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Scmenamann');
// lufthansa.book(635, 'Jonas Scme');
// console.log(lufthansa);

// const eurowinds = {
//   airline: 'Eurowinds',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //// Call method
// book.call(eurowinds, 23, 'Sarah Williams');
// console.log(eurowinds);

// const swiss = {
//   airline: 'Swis Air LINE',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 456, 'Marry Cooper');
// book.call(swiss, 456, 'Marry Coooper');
// book.call(swiss, 456, 'Marry Cooooper');
// console.log(swiss);

// //// Aply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// ////  Bind Method

// const bookEW = book.bind(eurowinds);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowinds, 23);
// bookEW23('ag');
// bookEW23('lohn');

// //// With Event listener

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// ///////// partical application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23

// console.log(addVAT(100));
// console.log(addVAT(200));

// function createFunc (rate) {
//   return function(value) {
//     return value + value * rate
//   }
// }

// const newFunc = createFunc(0.45)

// console.log(newFunc(100));
// console.log(newFunc(200));

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// ///// IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

///////////// Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengtrs`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

///////////// example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);

// /////////// example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);
