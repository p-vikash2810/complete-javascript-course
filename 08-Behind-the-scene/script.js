"use strict";

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
///////////////////////////////////////
// Hoisting and TDZ in Practice
// Variables
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;
// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;
// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted!');
}
var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


////////////////////////////////////////

console.log(this);

const calcAge = function (birthYear) {
  console.log(2030 - birthYear);
  console.log(this);
};

calcAge(1997);

const calcAgeArrow = (birthYear) => {
  console.log(2030 - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

const jonas = {
  year: 1990,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();



var firstName = "matilda";
const jonas = {
  firstName: "jonas",
  year: 1990,
  calcAge: function () {
    console.log(2037 - this.year);

    // solution 1
    const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial();

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(`hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addExpr(2, 4, 6);
addArrow(2, 3, 4);



// primitive typr
let age = 30;
let oldAge = age;
// age = 31;
oldAge = 31;
console.log(age);
console.log(oldAge);

// reference type
const me = {
  firstName: "Vikash",
  age: 25,
};

const friend = me;
friend.age = 30;
console.log("me: ", me);
console.log("friend: ", friend);

// copying object
const jessica = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
  family: ["Alice", "Bob"],
};

const copyJessica = Object.assign({}, jessica);
copyJessica.lastName = "Davis";

copyJessica.family.push("Mary");
copyJessica.family.push("John");

console.log(jessica);
console.log(copyJessica);

*/
