'use strict';

// Data needed for a later exercise
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

/////////// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES 6 enhansed object literals
  openingHours,

  order(starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },

  orderDelyvery({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainingrediend, ...otherIngredients) {
    console.log(mainingrediend);
    console.log(otherIngredients);
  },
};

///////////////////////////////// Working With Strings

// // #3
// //Split and Join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const passenger1 = 'jessica ann smith davis';
// const passenger2 = 'jonas schmedtmann';

// function capitalizeName(name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }

// capitalizeName(passenger1);
// capitalizeName(passenger2);

// //Pading
// const message = 'Go to gate 23';
// console.log(message.padStart(20, '-').padEnd(40, '-'));
// console.log('Anton'.padStart(20, '-').padEnd(40, '-'));

// const maslCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maslCreditCard(2984129875412984));
// console.log(maslCreditCard('200213919224128471'));
// console.log(maslCreditCard(298412));

// //Reapet

// const message2 = 'bad weather... All Deapartues Delayed       '
// console.log(message2.repeat(10));

// const planesInLine = function(n) {
//  console.log(`The are ${n} planes in line ${'✈'.repeat(n)}`);
// }
// planesInLine(10)
// planesInLine(100)
// planesInLine(1000)

// ///// #2

// const airline = 'TAP Air Portugal';
// const plane = 'Airbus Mriya neo';

// console.log(airline.toLocaleLowerCase());
// console.log(airline.toUpperCase());

// // FIX capitalization in name
// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase(); //--> jonas
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// function correctName (name) {
//   const nameLower = name.toLocaleLowerCase()
//   const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1)
//   console.log(nameCorrect);
// }
// correctName('aNToN')

// // Check emails
// const email = 'hello@jonas.io'
// const loginEmail = '   Hello@Jonas.Io \n'

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim()
// console.log(email === trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim()
// console.log(email === normalizedEmail);

// function checkEmail(checkedEmail) {
//   const email = 'antoni@wavve.example'
//   const normalizedEmail = checkedEmail.toLowerCase().trim()
//   console.log(email === normalizedEmail);
// }
// checkEmail('  antoNI@waVve.example ')

// // replacing
// const priceGB = '288,67?'
// const priceUS = priceGB.replace('?', '$').replace(',', '.')
// console.log(priceUS);

// const announcement = 'All passenger come to barding door 23. Boarding door 23!'
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); // regular expresion!!!!!!!

// // Booleans (Mriya)
// console.log(plane.includes('Mriya'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise
// function checkBaggage(items) {
//   const baggage = items.toLowerCase()
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log("You are NOT alloved a board");

//   } else {
//     console.log('Welcome aboard');
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife')
// checkBaggage('socks and camera')
// checkBaggage('Got some snacks and a gun for protection')

// //// #1
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('i'));
// console.log(airline.lastIndexOf('a'));
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(3, 8));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2))
// console.log(airline.slice(0, -1))

// const checkMidleSeat = function(seat) {
// const s = seat.slice(-1);
// if (s==='B' || s === 'E') {
//   console.log(`You got the midlle seat`);
// } else {
//   console.log(`you goy lucky`);
// }
// }

// checkMidleSeat('11B')
// checkMidleSeat('23C')
// checkMidleSeat('3E')

/////////// Maps FUNDAMENTALS
// const rest = new Map();
// rest.set('name', 'Clossico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon', 'Portugaly'));

// rest
//   .set('categories', ['italian', 'Pizzeria', 'Vegeterian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 22;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);
// console.log(rest.size);

// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.get([1, 2]));

///////// Maps ITERATiON

// const question = new Map([
//   ['question', 'What is the best programming language in thr world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);

// console.log(question);
// //Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// // const answer = Number(prompt('your answer'))
// // console.log(answer);
// // // console.log(question.get(question.get('correct') === answer))

// // convert Map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////////////// Sets
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);
// console.log(new Set('dawd'));
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Soup');
// orderSet.add('Soup');
// orderSet.delete('Risotto');
// console.log(orderSet);
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// //Example
// const staff = ['waiter', 'chef', 'waiter', 'maneger', 'chef', 'waiter'];
// const staffUnicue = [...new Set(staff)];
// console.log(staffUnicue);

// console.log(new Set(['waiter', 'chef', 'waiter', 'maneger', 'chef', 'waiter']).size);

// /// Property Names
// const properties = Object.keys(openingHours)
// console.log(properties);

// let OpenStr = `We are open on ${properties.length} days: `;
// for (const day of Object.keys(openingHours)) {
//   OpenStr += `${day}, `

// }
// console.log(OpenStr);

// /// Propety VALUES

// const values = Object.values(openingHours)
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours)
// console.log(entries);

// for ( const [key, {open, close} ] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////// optional chaining

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? `method does not exist`);
// console.log(restaurant.orderR?.(0,1) ?? `method does not exist`);

// // Arrays
// const users = [
//   {name:'jonas', email: 'hello@jomas.mail'}
// ]

// console.log(users[0]?.name ?? 'user array empty');

/////////////// array Looping
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item  of menu) console.log(item);

// for(const [i, el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`);
// }

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// }

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// }

//////// Or assigment operator
// rest1.numGuests = rest1.numGuests || 10
// rest1.numGuests ||= 10
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

////////// nullish assigment operator
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// // AND assigment operator
// rest2.owner = rest2.owner && '<ANON>'
// rest1.owner = rest1.owner && '<ANON>'
// rest1.owner && '<Anon>'
// rest2.owner && '<Anon>'

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //// nullish: null and undefined (not 0 ir '')
// const guestCorrect = restaurant.numGuests ?? 10
// console.log(guestCorrect);

// // Use ANY data type, return AnY data Type, short-cirvuling
// ///////////////  || -- OR
// console.log(3 || 'jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// /////////////// && -- AND
// console.log(0 && 'jonas');
// console.log(7 && 'dawd');

// console.log('hell' && 23 && null && 'j');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinaaaaaaaaaaaaach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //////////////////DESTRUCTURING
// // SPRED beacose on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST  because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, others);

// const [pizza, , risotto, ...other] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, ...other);

// /// Oject

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// //////////////////////FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 5, '', 2);
// add(3, 4, 5, 6, 7, 1, 2, 3);

// const x = [23, 5, 7];
// add(...x)

// restaurant.orderPizza('musgrooms', 'onion', 'olives', 'spinach')

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Хліб'];
// console.log(newMenu);

// // Copy arr
// const mainMenuCopy = [...restaurant.mainMenu]

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. Not objects
// const srt = 'Jonas'
// const letters = [...srt, ' ', 'S.']
// console.log(letters);

// const ingredients = [prompt(`Let's make pasta! Ingredient 1`), prompt(`Let's make pasta! Ingredient 2`), prompt(`Let's make pasta! Ingredient 1`)]
// restaurant.orderPasta(...ingredients)

// objects

// const newRestturant = {foundetIn:1998, ...restaurant, fouder:'Guiseppe'}
// console.log(newRestturant);

//////////////////////////////////////
// restaurant.orderDelyvery({
//   time: '22:30',
//   address: 'des',
//   mainIndex: 2,
//   starterIndex:2,
// })

// // default values
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const { name: restaurantName, categories: tags } = restaurant;
// console.log(restaurantName, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // REORDERING
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// ////////////////////////
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// /////////////////////////

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// const nested = [2, 4, [5, 6]];
// const [i, f, [t, b]] = nested;
// console.log(i, f, t, b);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log([p, q, r]);

/////////////////   STRING PRACTICE
// const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30`;

// const getCoge = (str) => str.slice(0, 3).toUpperCase()

// console.log(flights.split('+'));
// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '♦' : ''}${type.replaceAll('_', ' ')} from ${getCoge(from)} to ${getCoge(to)} (${time.replace(':', "h")})`.padStart(50)
//   console.log(output);
// }

//////////////// CHALLENGE #1

// 1
// const [players1, players2] = game.players
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = game.players[0]
// console.log(gk, fieldPlayers);

// // 3
// const allPlayers = [] = [...game.players[0], ...game.players[1]]
// console.log(allPlayers);

// //4
// const players1Final = ['Thigao', 'Coutinho', 'Perisic', ...game.players[0]]
// console.log(players1Final);

// // 5
// //------------ mine
// // const {team1, x, team2} = game.odds
// // const draw = x
// // console.log(team1, draw, team2);

// // ------------------- udemy
// const {odds: {team1, x: draw, team2}} = game
// console.log(team1, draw, team2);

// // 6
// //------------------mine
// // function printGoals(...players) {
// //   const playerss = arguments
// //   console.log(...arguments);
// //   console.log(`Toal goals is ${playerss.length}`)
// // }
// //-----------udemy
// function printGoals(...players) {
//   console.log(`Toal goals is ${players.length}`)
// }

// function showProbableWinner(odds){

//   odds.team1 < odds.team2 && console.log(`${game.team1} is likely to win this match`);
//   odds.team1 > odds.team2 && console.log(`${game.team2} is likely to win this match`);
// }

// printGoals('Davies','Muller', 'Lewandowski', 'Kimmich')
// printGoals(...game.scored)
// showProbableWinner(game.odds)

//////////////// CHALLENGE #2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// /// #1
// function showGoals() {
//   for (const [index, player] of game.scored.entries()) {
//     console.log(`Goal ${index + 1} scored by ${player}`);
//   }
// }

// /// #2 ----mine
// function calcAverage() {
//   let sumOdds = 0;
//   let number = 0;
//   for (const value of Object.values(game.odds)) {
//     sumOdds += value;
//     number++;
//   }
//   console.log(sumOdds / number);
// }

// /// 3.
// function printOdds() {
//   for (const [key, value] of Object.entries(game.odds)) {
//     const str = key === 'x' ? 'draw' : `victory ${game[key]}`;
//     console.log(`Odd of  ${str}: ${value}`);
//   }
// }

// // BONUS
// function bonus() {
//   const scorers = {};
//   for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   }
//   console.log(scorers);
// }

// showGoals();
// calcAverage();
// printOdds();
// bonus();

//////////////// CHALLENGE #3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // #1
// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // #2

// gameEvents.delete(64);
// console.log(gameEvents);

// // #3
// console.log(`An event happend on, every ${90 / gameEvents.size} minutes`);

// /////////////////////// udemy
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happend on, every ${time / gameEvents.size} minutes`);

// // #4
// //-----------mine
// for (const [time, event] of gameEvents) {
//   let half = '';
//   time < 45 ? half = `[FIRST HALF]` : half = `[SECOND HALF]`;
//   console.log(`${half} ${time}: ${event} `);
// }

// //------------udemy
// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${minute} : ${event}`);
// }

///////////////////////////////Coding Challenge #4
/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const btn = document.querySelector('button');
// btn.textContent = 'clik';
// btn.addEventListener('click', correctText);

// ////-------------------mine
// function correctText() {
//   const text = document.querySelector('textarea').value.toLowerCase();
//   const arr = text.split('\n');
//   const correctedText = [];
//   for (const [index, variable] of arr.entries()) {
//     const newVariable = variable.trim().split('_');
//     newVariable[1] = newVariable[1][0].toUpperCase() + newVariable[1].slice(1);
//     correctedText.push(
//       `${newVariable.join('').padEnd(25)}${`💢`.repeat(index + 1)}`
//     );
//   }
//   console.log(correctedText.join('\n'));
// }

// ////-------------udemy
// function correctTextUdemy() {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   const correctedText = [];
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${`💢`.repeat(i + 1)}`);
//   }
//   console.log(correctedText.join('\n'));
// }
