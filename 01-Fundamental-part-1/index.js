// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;
// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// if (markHigherBMI) {
//   console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 10;
if (money) {
  console.log("Don't spent it all");
} else {
  console.log("You should get a job");
}
