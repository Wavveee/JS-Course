'use strict';
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovemtnts = function (movements, sort = false) {
  containerMovements.textContent = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const movType = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${movType}">${
      i + 1
    } ${movType}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
console.log();
const updateUI = function (acc) {
  // display movements
  displayMovemtnts(acc.movements);
  // display balance
  calcDisplayBalabce(acc);
  // display summary
  calcDisplaySummary(acc);
};

const calcDisplayBalabce = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

let currentAccount;

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    containerApp.style.opacity = 100;

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receiveAcc);
  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.usermame
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    console.log(accounts);
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovemtnts(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//////////////// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e']

// ////          SLICE

// console.log(arr.slice(2))
// console.log(arr.slice(2, 4))
// console.log(arr.slice(-2))
// console.log(arr.slice(-1))
// console.log(arr.slice(1, -2))
// /////// copying arrey
// console.log(arr.slice());
// console.log([...arr]);

/////         SPLICE
// console.log(arr.splice(2));
// console.log(arr);
// arr.splice(-1)
// console.log(arr);

// console.log(arr);
// console.log(arr.splice(1, 3))
// console.log(arr);

//////  REVERSE
// const arr2 = ['j', 'i', 'h', 'g', 'f']

// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

// ////    CONCAT

// const letters = arr.concat(arr2)
// console.log(letters);
// console.log([...arr, ...arr2]);

// //// JOIN
// console.log(letters.join('-'));

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// //// getting last array eltment
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('anton'.at(0));
// console.log('anton'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////// FOREACH
// for(const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`You withdew ${Math.abs(movement)}`);
//   }
// }

// for(const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdew ${Math.abs(movement)}`);
//   }
// }

// console.log(`-----FOREACH-----`);
// movements.forEach((movement, i, arr) => {
//   if (movement > 0) {
//     console.log(`Movement ${i}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i}: You withdew ${Math.abs(movement)}`);
//   }
// });

/////// FOREACH withs MAPS and SETS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value, key, arr) => {
//   console.log(`${key} => ${value}`);
// });

// const unicueValues = new Set(['USD', 'USD', 'EUR', 'RUPIA']);
// console.log(unicueValues);
// unicueValues.forEach((value, key, map) => {
//   console.log(`${key} => ${value}`);
// })

////// MAP

// const eurToUsd = 1.1;

// const movementUSD = movements.map(mov => mov * eurToUsd);

// console.log(movementUSD);
// console.log(movements);

// const movementUSDfor = [];
// for (const mov of movementUSD) {
//   movementUSDfor.push(mov * eurToUsd);
// }
// console.log(movementUSDfor);

// const movementDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposit' : 'withdrew'} ${Math.abs(mov)}`
// );
// console.log(movementDescription);

//////// FILTER

// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

///////   REDUCE

// ACCUMULATOR -> SNOVBALL
// console.log(movements);
// const balance = movements.reduce((acc, cur, i, arr) => {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0)
// console.log(balance);

// let balance2 = 10
// for (const mov of movements) balance2 += mov
// console.log(balance2);

//----MACIMIM VALUE

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

//////////////  CHAINING METHODS
// const eurToUsd = 1.1;

// // PIPELINE

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//    return mov * eurToUsd;
//     // console.log(arr);
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

////////////////////// FIND
// const firstWrhdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWrhdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// let account22 = {}

//   for (const acc of accounts) {
//     if (acc.owner === 'Jessica Davis')  account22 = acc;
//   }

// console.log(account22);

//////////////// INCLUDE, SOME, EVERY
//// INCLUDE
// console.log(movements);
// console.log(movements.includes(-130));

///// SOME
// const anyDeposits = (value, arr = movements) => arr.some(mov => mov > value);
// console.log(anyDeposits(0));
// console.log(anyDeposits(5000));

//// EVERY
// const everyDeposit = (value, arr = movements) => arr.every(mov => mov > value);
// console.log(everyDeposit(0));
// console.log(everyDeposit(0, account4.movements));

////  FLAT

// const arr = [[1, 2, 3], [4, , 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, , [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); //// argument is deep

// // const accountMovrmets = accounts.map(acc => acc.movements);
// // const allMovements = accountMovrmets.flat();
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);

// const overalBalanse = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalanse);

// //// FLATMAP

// const overalBalanse2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalanse);

/////////////// SORT
// STRING

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha', 'Anton'];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners);
// // NUMBERS

// console.log(movements);
// console.log(movements.sort());

// // ascending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   })
// );
// console.log(movements.sort((a, b) => a - b));

// //descending
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
//   })
// );
// console.log(movements.sort((a, b) => b - a));

///////////// CREATING ARRAYS

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //// empty arrays + fill
// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5)); // dont work!!!!!!!

// console.log(`---------`);
// const xx = new Array(7);
// console.log(xx);
// xx.fill(1);
// console.log(xx);

// console.log(`---------`);

// const xxx = new Array(7);
// console.log(xxx);
// xxx.fill(1, 4);
// console.log(xxx);

// console.log(`---------`);

// const xxxx = new Array(7);
// console.log(xxxx);
// xxxx.fill(1, 3, 5);
// console.log(xxxx);

// //// Array.from()

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const r = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6));
// console.log(r);

// labelBalance.addEventListener('click', () => {
//   const movUI = Array.from(document.querySelectorAll('.movements__value'),
//   (el) => +el.textContent.replace('€', '')
//   );
//   console.log(movUI);

//   const movUI2 = [...document.querySelectorAll('.movements__value'),]
//   console.log(movUI2);

//   const movUI3 = document.querySelectorAll('.movements__value')
//   console.log(movUI3);
// });

//////////// PRACTICE!!!!!!!!!!!!!

////// #1
const bankDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDeposit);

// #2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

const numDeposits1000Reduse = accounts
  .flatMap(acc => acc.movements)
  .reduce((counter, cur) => (cur >= 1000 ? ++counter : counter), 0);
console.log(numDeposits1000Reduse);

// #3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      // sums[cur > 0 ? 'deposits' : "withdrawals"]
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals );

// const reduceDep = movements.reduce((acc, curr) =>{
//   if(curr > 0) acc.push(curr)
//   return acc
// }, [])

// console.log(reduceDep);

/// #4

// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// //////////// CHALLENGE №1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about 
their dog's age, and stored the data into an array (one array for each). For now, 
they are just interested in knowing whether a dog is an adult or a puppy. A dog is 
an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats,
 not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that 
 copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy 
("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const julia = [9, 16, 6, 8, 3];
// const ketes = [10, 5, 6, 1, 4];

// const checkDogs = function (juliaArr, ketesArr) {
//   // const correctedJuliaArr = juliaArr.slice(1, 3);
//   const correctedJuliaArr = juliaArr.slice()
//   correctedJuliaArr.splice(0, 1)
//   correctedJuliaArr.splice(-2, 2)

//   const ollAges = [...correctedJuliaArr, ...ketesArr];
//   console.log(ollAges);

//   ollAges.forEach((dogAge, index) => {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs(julia, ketes);

//////////// CHALLENGE №2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog 
ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'),
 and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 
years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping 
  dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other 
  challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//// ------- MINE
// const calcAverageHumanAge = function (arr) {
//   const humanAges = arr.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   humanAges.forEach((age, i) => {
//     if (age < 18) humanAges.splice(i, 1);
//   });
//   console.log(humanAges);
//   const averageAge =
//     humanAges.reduce((acc, age) => {
//       return acc + age;
//     }, 0) / humanAges.length;
//   console.log(averageAge);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//// ------- UDEMY

// const calcAverageHumanAgeUdemy = function (arr) {
//   const humanAges = arr.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const averageAge =
//     adults.reduce((acc, age, _, arr) => {
//       return acc + age  / arr.length;
//     }, 0)
//   console.log(averageAge);
// };

// calcAverageHumanAgeUdemy([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAgeUdemy([16, 6, 10, 5, 6, 1, 4]);

//////////// CHALLENGE №3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAgeUdemy = function (arr) {
//   const averageAge = arr
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
//   console.log(averageAge);
// };

// calcAverageHumanAgeUdemy([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAgeUdemy([16, 6, 10, 5, 6, 1, 4]);

//////////// CHALLENGE №4

/////// TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 2
// // ----------- mine
// function checkCurrenFood(curr, rec) {
//   if (curr > rec * 1.1) {
//     return `too much`;
//   } else if (curr < rec * 0.9) {
//     return `too little`;
//   } else {
//     return `its ok`;
//   }
// }

// dogs.find(dog => {
//   if (dog.owners.includes('Sarah'))
//     console.log(checkCurrenFood(dog.curFood, dog.recFood));
// });

// // ----------- udemy
// // const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'))
// // console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

// // 3
// // ----------- mine
// const ownersEatTooMuch = dogs
//   .filter(dog => checkCurrenFood(dog.curFood, dog.recFood) === `too much`)
//   .flatMap(dog => dog.owners);
// const ownersEatTooLittle = dogs
//   .filter(dog => checkCurrenFood(dog.curFood, dog.recFood) === `too little`)
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

// // 4
// //"Matilda and Alice and Bob's dogs eat too much!"  "Sarah and John and Michael's dogs eat too little!"

// console.log(ownersEatTooMuch.join(' and ') + `'s dogs eat too much!`);
// console.log(ownersEatTooLittle.join(' and ') + `'s dogs eat too little!`);

// // 5

// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6

// console.log(
//   dogs.some(dog => checkCurrenFood(dog.curFood, dog.recFood) === `its ok`)
// );

// // 7

// const ownersEatOk = dogs
//   .filter(dog => checkCurrenFood(dog.curFood, dog.recFood) === `its ok`)
//   .flatMap(dog => dog.owners);

// console.log(ownersEatOk);
// // 8

// const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood)

// console.log(sortedDogs);
