'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2013-07-22T06:04:23.907Z',
    '2023-07-22T14:18:46.235Z',
    '2023-07-23T16:33:06.386Z',
    '2023-07-23T14:43:26.374Z',
    '2023-07-24T18:49:59.371Z',
    '2023-07-25T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'uk-UA',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 2) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = `${formattedMov}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutYimer = function () {
  // Set time to 5 minutes
  let time = 300;

  const timer = () => {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const second = `${Math.trunc(time % 60)}`.padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${second}`;

    if (time == 0) {
      clearInterval(logOutTimeout);

      labelWelcome.textContent = 'log in to get started';
      containerApp.style.opacity = 0;
    }

    time--;
  };

  // Call the timer every second
  timer();
  const logOutTimeout = setInterval(timer, 1000);

  // When 0 seconds, stop timer and log out user

  return logOutTimeout;
};

///////////////////////////////////////
// Event handlers
let currentAccount, logOutTimeout;

// fake loggged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const now = new Date();
const day = `${new Date().getDate()}`.padStart(2, 0);
const month = `${new Date().getMonth() + 1}`.padStart(2, 0);
const year = new Date().getFullYear();
const hour = new Date().getHours();
const min = `${new Date().getMinutes()}`.padStart(2, 0);
labelDate.textContent = `${day}/${month}/${year} -- ${hour}:${min}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: `numeric`,
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    const lokale = navigator.language;
    console.log(lokale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    // const day = `${new Date().getDate()}`.padStart(2, 0);
    // const month = `${new Date().getMonth() + 1}`.padStart(2, 0);
    // const year = new Date().getFullYear();
    // const hour = `${new Date().getHours()}`.padStart(2, 0);
    // const min = `${new Date().getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year} -- ${hour}:${min}`;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (logOutTimeout) clearInterval(logOutTimeout);
    logOutTimeout = startLogOutYimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(logOutTimeout);
    logOutTimeout = startLogOutYimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      // Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);

      clearInterval(logOutTimeout);
      logOutTimeout = startLogOutYimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23);

// // Base 10 - 0 to 9. 1/10 = 0.1 3/10 = 3.33333333333333333333333333333333333333333333333333333333
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('23'));
// console.log(+'23');

// // Paesing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseInt('2.5', 10));
// console.log(Number.parseFloat('2.5', 10));

// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20x'));
// console.log(Number.isNaN(23 / 0));

// // Cheking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+"20x"));
// console.log(Number.isFinite(20 / 0));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 6, 7, 88, 9, 1, 11, 234));
// console.log(Math.max(5, 6, 7, '88', 9, 1, 11, 234));
// console.log(Math.max(5, 6, 7, 88, 9, 1, 11, '223px'));

// console.log(Math.min(5, 6, 7, 88, 9, 1, 11, 234));

// console.log(Math.PI * Number.parseInt('10px') ** 2);
// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (max, min) => Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(105, 100));

// //////////////// rounding integrs

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor("23.9"));

// console.log(Math.trunc(23.3));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// //////////////// Rounding decimals
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.344).toFixed(2));
// console.log(+(2.345).toFixed(2));

//////// The Remainder Operator

// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 + 1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = n => n % 2 === 0;

// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if(i % 2 === 0) row.style.backgroundColor = 'orangered'
//     if(i % 3 === 0) row.style.backgroundColor = 'blue'
//   })

// })

/////////////////// " _ "
// const diameter = 287_460_000_000
// console.log(diameter);

// const priceCents = 345_99
// console.log(priceCents);

// const transferFee1 = 15_00
// const transferFee2 = 1_500

// const PI = 3.14159265

// console.log(Number('230000'));
// console.log(Number('230_000'));

///////////////////// BigInt

// console.log(2 ** 53 - 1); //// bigest number on JS
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(264192846192864198263981263981629486n); /// now is BigInt
// console.log(BigInt(264192846192864198263981263981629486n)); //// carefully

// /// Operations
// console.log(10000n + 10000n);
// console.log(32047230947209395729037520347289374n * 10000000n);

// const huge = 2028983023837207349274n;
// const num = 23;
// //console.log(huge * num); //!!!!!!!!!!!!!!!!!!!!!!

// console.log(huge * BigInt(num));

// /// Exeptions

// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == '20');

// console.log(huge + ' is REALLY big!!!');

// //Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

//////////////// Dates and Times

// const now = new Date();
// console.log(now);

// console.log(new Date('Jul 25 2023 15:02:24'));
// console.log('-------------');
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 39,)); /// autocorrect
// console.log('-------------');
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// console.log('-------------');

// // Worcing with dates
// const future = new Date(2037, 10, 20, 15, 23, 5)
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth()); /// zero based
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); //// !!!!
// console.log(future.getTime());

// console.log(new Date(2142336185000));

// console.log(Date.now()); ///// current time in miliseconds

// future.setFullYear(2040)
// console.log(future);

//// Operation with Dates

// const future = new Date(2037, 10, 20, 15, 23, 5);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// console.log(calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14)));

///////// Intnationalization Numers

/*
const num = 3884765.99;

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('UA:', new Intl.NumberFormat('uk-UA', options).format(num));
*/

////////////////// setTimeout

// const ingredients = ['olives', 'ковбаска)'];

// const pizzaTimer = setTimeout(
//   (ing, sIng) => console.log(`Here is yor pizza🍕 with ${ing} and ${sIng}`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

/////////////////// setInterval

// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000)

// setInterval((second) => {
//   const nowForInterwal = new Date()
//   const hours = nowForInterwal.getHours()
//   const minute = nowForInterwal.getMinutes()
//   const seconds = nowForInterwal.getSeconds()
//   nowForInterwal + second
//   console.log(`${hours}:${minute}:${seconds}`);
// }, 1000)
