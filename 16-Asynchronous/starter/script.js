'use strict';
//https://restcountries.eu/rest/v2/
//https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
///////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCoutry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(2)} mln people</p>
                <p class="country__row"><span>🗣️</span>${data.languages.ukr}</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies.UAH.name
                }</p>
            </div>
        </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (coutry) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${coutry}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCoutry(data);
  });
};

// getCountryData('ukraine')
// getCountryData('japan')
// getCountryData('gb')

///////////////////////////////////////

// const getCountryAndNeibour = function (coutry) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${coutry}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     renderCoutry(data);

//     // Get neighbour country
//     const neighbour = data.borders?.[0];
//     console.log(neighbour);

//     if (!neighbour) return;

//     //AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {

//         const data2 = JSON.parse(this.responseText);
//         renderCoutry(data2, 'neighbour');
//     })
//   });
// };

// getCountryAndNeibour('ukraine');

///////////////////////////////////////

// const request = fetch(`https://restcountries.com/v2/name/ukraine`);
// console.log(request);

// const getCountryData = function (coutry) {
//   // coutry1
//   fetch(`https://restcountries.com/v2/name/${coutry}`)
//     .then(resp => {
//       if (!resp.ok) throw new Error(`Country not found(${resp.status})`);

//     })
//     .then(data => {
//       renderCoutry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;

//       // coutry2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(resp => {
//       if (!resp.ok) throw new Error(`Country not found(${resp.status})`);
//       resp.json();
//     })
//     .then(neighbour => renderCoutry(neighbour, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥💥`);
//       renderError(`Sometging went wrong  ${err.message}💥💥💥`);
//     });
// };

// btn.addEventListener('click', () => {
//   getCountryData('ukraine');
// });

///////////////////////////////////////

const getJSON = function (url, errorMsg = `something went wrong`) {
  return fetch(url).then(resp => {
    if (!resp.ok) throw new Error(`${errorMsg} (${resp.status})`);
    return resp.json();
  });
};

// const getCountryData = function (coutry) {
//   getJSON(`https://restcountries.com/v2/name/${coutry}`, `Country not gound`)
//     .then(data => {
//       renderCoutry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) throw new Error('-- No neighbour')

//       // coutry2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `Country not gound`
//       );
//     })
//     .then(neighbour => renderCoutry(neighbour, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥💥💥`);
//       renderError(`Sometging went wrong  ${err.message}💥💥💥`);
//     });
// };

// btn.addEventListener('click', () => {
//   getCountryData('japan');
// });

///////////////////////////////////////

// console.log(`Test start`);
// setTimeout(() => console.log(`0 sec time`), 0);
// Promise.resolve(`Resolved promise 1`).then(resp => console.log(resp));
// console.log(`Test end`);

///////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lotter draw is happening`);
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You Win 🤑');
//     } else {
//       reject(new Error(`You lost yor money 💩`));
//     }
//   }, 3000);
// });

// lotteryPromise.then(resp => console.log(resp)).catch(err => console.error(err));

//////////////////////////////////////////////
///////////// Promisifying setTimeout

// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 second`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited for 1 second`);
//   });

// Promise.resolve('awda').then(x => console.log(x))
// Promise.resolve(new Error('awda')).then(x => console.error(x))

//////////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=873683709409457548220x57592`
//       );
//     })
//     .then(resp => resp.json())
//     .then(resp => {
//       console.log(`You are in ${resp.city}, ${resp.country}`);
//       const countryName = resp.country.toLowerCase();
//       fetch(`https://restcountries.com/v2/name/${countryName}`)
//         .then(resp => resp.json())
//         .then(resp => renderCoutry(...resp));
//     })
//     .catch(err => console.error(`${err.message} 💥`));
// };

// btn.addEventListener('click', whereAmI);

//////////////////////////////////////////
////////////  ASYNC / AWAIT

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

const whereAmI = async function () {
  try {
    // geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=873683709409457548220x57592`
    );
    const geoloc = await resGeo.json();
    // console.log(geoloc);

    const res = await fetch(
      `https://restcountries.com/v3.1/name/${geoloc.country}`
    );
    const data = await res.json();
    // console.log(data);
    renderCoutry(data[0]);
    console.log(data[0]);

    return `You are in ${data[0].name.common}`;
  } catch (err) {
    renderError(`Something went wrong ${err.message}`);
  }
};

// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2:${err.message}`))
//   .finally(() => console.log(`3: Fnished getting location`))

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (err) {
//     console.error(`2:${err.message}`);
//   }
//   console.log(`3: Fnished getting location`)
// })();

//////////////////////////////////////////
/////////// RUNNING PROMISES IN PARALEL

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     // console.log(...data1.capital, ...data2.capital, ...data3.capital);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('ukraine', 'portugal', 'canada');

//////////////////////////////////////////
////// Promise Combinators
// Promise.rase
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//   ]);

//   console.log(res[0]);
// })();

// const timeout = function(sec) {
//   return new Promise(function(_, reject) {
//     setTimeout(function() {
//       reject(new Error(`Request took too long!`))
//     }, sec * 1000)
//   })
// }

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//   timeout(1)
// ]).then(resp => console.log(resp[0]))
// .catch(err => console.error(err))

////Promise.allSettled / all

// Promise.allSettled([
//   Promise.resolve('SUCCESS'),
//   Promise.resolve('SUCCESS'),
//   Promise.resolve('SUCCESS'),
//   Promise.reject('Another Success'),
// ]).then(resp => console.log(resp));

// Promise.all([
//   Promise.resolve('SUCCESS'),
//   Promise.resolve('SUCCESS'),
//   Promise.reject('ERROR'),
//   Promise.resolve('SUCCESS'),
// ])
//   .then(resp => console.log(resp))
//   .catch(err => console.error(err));

// ///// Promise.any [ES2021]

// Promise.any([
//   Promise.resolve('SUCCESS'),
//   Promise.resolve('SUCCESS'),
//   Promise.reject('ERROR'),
//   Promise.resolve('SUCCESS'),
// ]).then(resp => console.log(resp));

//////////////////////////////////////////

//////////////////////////////////////////
////// CHALLENGE #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a 
longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to 
convert coordinates to a meaningful location, like a city and country name. Use this
 API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: 
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch
 API and promises to get the data. Do NOT use the getJSON function we created, that
  is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes
 that you recieved about the provided location. Then, using this data, log a messsage 
 like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will 
get this error with code 403. This is an error with the request. Remember, fetch()
 does NOT reject the promise in this case. So create an error to reject the promise
 yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant
 attribute from the geocoding API result, and plug it into the countries API that we 
 have been using.
7. Render the country and catch any errors, just like we have done in the last lecture 
(you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=873683709409457548220x57592`
//   )
//     .then(resp => resp.json())
//     .then(resp => {
//       console.log(`You are in ${resp.city}, ${resp.country}`);
//       const countryName = resp.country.toLowerCase()
//       fetch( `https://restcountries.com/v2/name/${countryName}`)
//       .then(resp => resp.json())
//       .then(resp => renderCoutry(...resp))
//     })
//     .catch(err => console.error(`${err.message} 💥`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037,  72.873);
// whereAmI(-33.933, 18.474);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function
 returns a promise which creates a new image (use document.createElement('img')) and
  sets the .src attribute to the provided image path. When the image is done loading,
   append it to the DOM element with the 'images' class, and resolve the promise. 
   The fulfilled value should be the image element itself. In case there is an error 
   loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait 
function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'),
 and load a second image (HINT: Use the image element returned by the createImage 
  promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, 
otherwise images load too fast.

GOOD LUCK 😀
*/

// const container = document.querySelector('.images');
// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       container.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(`image 1 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`image 2 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`image 3 loaded`);
//     return wait(2);
//   })
//   .catch(err => console.error(err));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await
(only the part where the promise is consumed). Compare the two versions, think about the big differences,
and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function
(call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
// patt1
// const container = document.querySelector('.images');
// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       container.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// const showImges = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     console.log(`Image 1 loaded`);
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImage('img/img-2.jpg');
//     console.log(`Image 2 loaded`);
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImage('img/img-3.jpg');
//     console.log(`Image 3 loaded`);
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// };
// // showImges();

// // part2
// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async img => await createImage(img));
//     console.log(imgs);

//     const imgsEL = await Promise.all(imgs)
//     imgsEL.forEach(img => img.classList.add('parallel'))
//   } catch (err) {
//     console.log(err);
//   }
// };
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
