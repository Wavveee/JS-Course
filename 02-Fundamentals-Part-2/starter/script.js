'use strict';

// let hasDriversLisense = false
// const passTest = true

// if (passTest) hasDriversLisense = true

// if (hasDriversLisense) console.log('i can drive')

/////////////////////////////////////

// function logger() {
//     console.log('моє імя астоьфо');
// }

// logger()

// function fruitProcesor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// const juice = fruitProcesor(5, 0);
// console.log(juice)
// console.log(fruitProcesor(5, 100));

/////////////////////////////////////

// function calcAge1(birthYear) {
//     return 2037 - birthYear
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return  2037 - birthYear
// }
// const age2 = calcAge2(1999) 
// console.log(age1, age2);

/////////////////////////////////////

// // Function expression
// const calcAge2 = function (birthYear) {
//     return  2037 - birthYear
// }

// // Arrow function
// const calcAge3 = birthYear => 2300 - birthYear
// const age3 = calcAge3(1999)
// console.log(age3);

// const yearUntilRerement = (birthYear, name) => {
//     const age = 2034 - birthYear;
//     const retiremtnt = 65 - age;
//     // return retiremtnt
//     return `${name} retires in ${retiremtnt} yeares`
// } 
// console.log(yearUntilRerement(1999, 'Astolfo'));
// console.log(yearUntilRerement(1995, 'Pots'));

/////////////////////////////////////

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcesor(apples, oranges) {
//     const applesPices = cutFruitPieces(apples);
//     const orangesPices = cutFruitPieces(oranges);
//     const juice = `Juice with ${applesPices} apples Pices and ${orangesPices} oranges Pices`
//     return console.log(juice);
// }

// fruitProcesor(3, 5)

/////////////////////////////////////

// const calcAge = function(birthYear) {
//     return 2030 - birthYear;
// }

// const yearUntilRerement = function (birthYear, name) {
//     const age = calcAge(birthYear)
//     const retiremtnt = 65 - age;

//     if (retiremtnt > 0) {

//         return `${name} retires in ${retiremtnt} yeares`

//     } else {

//         return -1

//     }

//     // return retiremtnt

// } 

// console.log(yearUntilRerement(1999, 'Ast'));
// console.log(yearUntilRerement(0, 'who'));

/////////////////////////////////////

//CHALLENGE #1

// const calcAverage = (firstDiscipline, secondDiscipline, thirdDiscipline) => (firstDiscipline + secondDiscipline + thirdDiscipline) / 3

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)

// function checkWinner(avgDolphins, avgKoalas) {

//     if (avgDolphins >= avgKoalas * 2) {
//        console.log(` Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(` Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)

/////////////////////////////////////

//CHALLENGE #2

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// function calcTip (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15
//     } else {
//         return bill * 0.2
//     }
// }

/////////////////////////////////////

//CHALLENGE #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// }


// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     },
// }

// mark.calcBMI()
// john.calcBMI()

// console.log(mark.bmi)

// if (mark.bmi > john.bmi) {
//     console.log(`BMI ${mark.fullName} (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`);
// } else if (mark.bmi < john.bmi){
//     console.log(`BMI ${john.fullName} (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`);
// }

/////////////////////////////////////

// console.log('lifting weight');

// for(let i = 1; i <=10; i++) {
//     console.log(`lifting weight ${i}`);
// }

// const types = [];

// const jonasArray = [
//     'Jonas',
//     'Who',
//     2040 - 1999,
//     'teacher',
//     ['Michael', 'Peter', 'Steaven'],
//     true,
// ]

// for (let i = 0; i < jonasArray.length; i++) {
//     console.log(jonasArray[i]);

//     types.push(typeof jonasArray[i])
// }

// console.log(types);

// const years = [1999, 1998, 1997, 1996];
// const ages = [];

// for (let i = 0; i < years.length; i++) {

//     ages.push(2040 - years[i])
// }

// console.log(ages);

// continue break

// for (let i = 0; i < jonasArray.length; i++) {

//     if (typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i]);
// }

// for (let i = 0; i < jonasArray.length; i++) {

//     if (typeof jonasArray[i] === 'number') break;

//     console.log(jonasArray[i]);
// }

/////////////////////////////////////

// const jonas = [
//     'Jonas',
//     'Who',
//     2040 - 1999,
//     'teacher',
//     ['Michael', 'Peter', 'Steaven'],
//     true,
//     false
// ]

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for (let exersize = 1; exersize < 4; exersize++){
//     console.log(`______________start ${exersize}`);

//     for(let i = 1; i < 6; i++){
//         console.log(`Lifteng ${i}`);
//     }

// }

/////////////////////////////////////

// let i = 1;

// while (i <= 10) {
//     console.log(`Lifteng ${i}`);
//     i++;
// }


// let dice;

// while (dice !== 6) {
//     dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(`Yo rolled a ${dice}`);
// }

/////////////////////////////////////

//CHALLENGE #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52,];
// const tips = [];
// const total = [];

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     total.push(tips[i] + bills[i]);
// }

// console.log(tips)
// console.log(total)



// function calcAverage(arr) {
//     let sum = 0;
//     let average = 0;

//     // arr.forEach(element => {
//     //     sum += element
//     // });

//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//         average = sum / arr.length
//     console.log(average)
// }
// calcAverage(total)