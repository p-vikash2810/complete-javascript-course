"use strict";

// let hasDriverLicense = false;
// const testPassed = true;

// if (testPassed) hasDriverLicense = true;
// if (hasDriverLicense) console.log("I can drive 🚗");

// let interface = "abd";

// function logger() {
//   console.log("My name is Jonas");
// }

// logger();

// function fruitProcessor(apple, oranges) {
//   const juice = `Juice with ${apple} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(4, 5));

// let num = Number("23");
// console.log(num);

// function declaration.
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(calcAge1(1997));

// // function Expression.
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// console.log(calcAge2(1997));

// function calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, oranges) {
//   const applePieces = cutFruitPieces(apple);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apples and ${orangesPieces} piece of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
// const calcTip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

// const bills = [125, 555, 44];
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// continue and break

const jonas = [
  "Jonas",
  "Schmedtmann",
  45,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
