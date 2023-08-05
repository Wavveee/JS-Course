'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear
//     console.log(firstName);

//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`
//         console.log(output);

//         if(birthYear > 1981 && birthYear <= 1996) {
//             const str = `Oh, and you're a millenial`
//             console.log(str);
//         }
//     }

//     printAge()
//     return age
// }

// const firstName = 'Wavve'
// calcAge(1991)

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => {
//   return a + b;
// };

// console.log(this)

// console.log();

// const calcAgeArrow = (birthYear) => {
//     console.log (2040 - birthYear)
//     console.log (this)
// }

// calcAgeArrow(1999);

// const j = {
//     y: 1999,
//     calcAge: function() {
//         console.log(this);
//         console.log (2040 - this.y)
//     }
// }

// const m = {
//     y:2000,
// }

// j.calcAge()
// m.calcAge = j.calcAge
// m.calcAge()

// const f = j.calcAge
// f()

// const jonas = {
//   firstName: 'Mila',
//   year: 1999,
//   calcAge: function () {
//     console.log(2040 - this.year);

//     const self = this;
//     const isMillenial = function () {
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },

//   //     const isMillenial =  () => {
//   //       console.log(this.year >= 1981 && this.year <= 1996);
//   //     };
//   //     isMillenial();
//   //   },

//   greed: () => {
//     console.log(`Шолом ${this.firstName}`);
//   },
// };

// jonas.greed();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 6);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 9);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log(`Before marrige:`, jessica);
console.log(`After marrige:`, jessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

Object.assign 

const marriedJessica2 = Object.assign({}, jessica2) 
marriedJessica2.lastName = 'Davis';
console.log(jessica2);
console.log(marriedJessica2);

marriedJessica2.family.push('Wavve')

console.log(jessica2);
console.log(marriedJessica2);

