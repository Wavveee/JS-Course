// Importing module
// import { addToCart, totalPrice as prise, tq } from './shoppingCart.js';

// console.log('Importing module');

// addToCart('bread', 5);
// console.log(prise, tq);

// import * as ShoppingCart from './shoppingCart.js';
// // console.log(ShoppingCart);

// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as prise, tq } from './shoppingCart.js' /// так ніхто неробе і ти не роби
import { addToCart, cart } from './shoppingCart.js';
import add from './shoppingCart.js'; /// це вже ліпше
// add('pizza', 2);
// add('bread', 10);
// add('apple', 4);
// console.log(cart);

// console.log('START');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
// const data = await  res.json()
// console.log(data);
// console.log('END');

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   return {title: data.at(-1).title, text: data.at(-1).body}
// };

// const lastPost = getLastPost()
// console.log(lastPost);
// // Not very clean
// // lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost()
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderSrock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4)
// ShoppingCart2.addToCart('pizza', 7)
// console.log(ShoppingCart2);

////////////////////////////////////
//////////// COMMON-JS-MODULES

// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

/////////////////////////////////////
////////////// Command Line
////////////////////////////////////

/////////////////////////////////////
////////////// NPM

import cloneDeep  from 'lodash-es/cloneDeep.js';

const state = {
  cart: [
    { roduct: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state)
state.user.loggedIn = false
console.log(stateClone);
console.log(stateDeepClone);