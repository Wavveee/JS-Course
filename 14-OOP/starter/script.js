'use strict';

// const Person = function (firstName, birsthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birsthYear = birsthYear;

//   //Never do this
//   //   this.calcAge = function(){
//   //     console.log(2037 - this.birsthYear);
//   //   };
//   console.log(this);
// };

// const jonas = new Person('Jonas', 1991);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to proto
// // 4. function automaticaly return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birsthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// // .prototypeOfLinkedObjects

// Person.prototype.species = 'No Homo';
// console.log(jonas, matilda);
// console.log(jonas.species, matilda.species);

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 6, 7, 8, 1, 3, 4, 5, 6, 7, 8, 1]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unicue = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unicue());

// const h1 = document.querySelector('h1');

// console.log(h1);
// console.dir(h1);

// console.dir(x => x + 'no homo');

//////////////////////////////////////////////////
/// CLASSES ES6

//class expression
//const PersonCL = class {}

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet = function () {
//     console.log(`hey ${this.firstName}`);
//   };

//   get age() {
//     return 2037 - this.birthYear
//   }

//   set fullName(name) {
//     console.log(name);
//     if(name.includes('')) this._fullName = name
//     else alert(`${name} is not a full name!!`)
//   }

//   get fullName() {
//     return this._fullName
//   }

//   // Static
//   static hey(){
//     console.log('hey');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();

// // PersonCl.prototype.greet = function(){
// //     console.log(`hey ${this.firstName}`);
// // }

// jessica.greet();

// // 1.classes are Not hoisted
// // 2. Class sre First-class citizes
// // 3. Classes are execuded in strict mode

// //////////////////////////////////////
// // geters and seters

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov)
//   }
// };

// console.log(account.latest);

// // account.latest(50) !!!!!!!!!! wrong
// account.latest = 50
// console.log(account.latest);

// ////////////////////////////////////////
// /// STATIC METHODS

// const Person = function (firstName, birsthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birsthYear = birsthYear;

//   //Never do this
//   //   this.calcAge = function(){
//   //     console.log(2037 - this.birsthYear);
//   //   };
//   console.log(this);
// };

// const jonas = new Person('Jonas', 1991);

// Person.hey = function() {
//     console.log(`hey`);
//     console.log(this);
// }

// Person.hey()
// // jonas.hey() !!!!!!!!!!

////////////////////////////////////////
/// OBJECT CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'steaven';
// steven.birthYear = 2002;
// steven.calcAge();

////////////////////////////////////////
/// Inheritanxe Between "Classes" : Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduse = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduse();
// mike.calcAge();

////////////////////////////////////////
/// Inheritanxe between Classes ES6

// class PersonCL {
//   constructor(fullName, birthYeear) {
//     this.fullName = fullName;
//     this.birthYeear = birthYeear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYeear);
//   }
// }

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYeear, course) {
//     // if we dont have any new properties, we do not need constructor function
//     // Always needs to happen First!!!
//     super(fullName, birthYeear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`my name is ${this.fullName} and i study ${this.course}`);
//   }
// }

// const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// ////////////////////////////////////////
// /// Inheritanxe between Classes "Object.create"

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYeear);
//   },

//   Init(firstName, birsthYear) {
//     this.firstName = firstName;
//     this.birsthYear = birsthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.Init = function (firstName, birsthYear, course) {
//   PersonProto.Init.call(this, firstName, birsthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My mane is ${this.fullName} and I styde ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.Init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//////////////////////////////////////////////////
//// Just Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    /// PROTECTED PROP
    this._movements = [];
    this.locale = navigator.language;

    console.log(`A-BA-LA-MA-GA`);
  }

  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  wethdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250)
// acc1.movements.push(-140)
acc1.deposit(250);
acc1.wethdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

//////////////////////////////////////////////////
//// ENCAPSULATION !!!!!!!!!!!!!!!
// use " _ "

// Public fieds
// Private fields
// Publick methods
// Private methods

class Accountt {
  // Public fieds (instances)
  locale = navigator.language;

  // Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    /// PROTECTED PROP
    // this._movements = []
    // this.locale = navigator.language

    console.log(`A-BA-LA-MA-GA`);
  }

  // Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  wethdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

//////////////////////////////////////////////////
//// CHALLEGE #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property.
 The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new 
speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple
times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function(make, speed){
//     this.make = make
//     this.speed = speed
// }

// Car.prototype.accelerate = function(){
//     this.speed += 10
//     console.log(`${this.make} going at ${this.speed}`);
// }

// Car.prototype.brake = function(){
//     this.speed -= 5
//     console.log(`${this.make} going at ${this.speed} km/h`);
// }

// const car1 = new Car('BMW', 100)
// const car2 = new Car('Mercedes', 100)

// car1.accelerate()
// car1.accelerate()

// car2.brake()

//////////////////////////////////////////////////
//// CHALLEGE #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to
   km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter 
and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5
//         console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     console.log(`Current speed is ${this.speed / 1.6} m/h`);
//   }

//   set setSpeedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car = new Car('Ford', 120);
// car.accelerate()
// car.accelerate()
// car.speedUS;
// car.setSpeedUS = 140;
// car.brake()
// car.speedUS;
// console.log(car);

//////////////////////////////////////////////////
//// CHALLEGE #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD 
"class" of Car. Besides a make and current speed, the EV also has the current battery
 charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the 
battery charge to 'chargeTo';

3. Implement an 'accelerate' method that will increase the car's speed by 20, and 
decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h,
 with a charge of 22%';

 4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'!
 HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
 */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(this.charge);
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, '23%');
// tesla.chargeBattery(100);
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.brake();
// tesla.brake();
// tesla.accelerate();

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child 
class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of 
this class, and also update the 'brake' method in the 'CarCl' class. They experiment 
with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    this.charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  #chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(this.#charge);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
console.log(rivian.speedUS);

rivian
  ._chargeBattery(90)
  .accelerate()
  .accelerate()
  .brake()
  .accelerate()
  ._chargeBattery(90)
  .accelerate();
