// readline = provides an interface for reading data from readable stream
// (process.stdin) one line at a time.

const readline = require("readline");
//console.log(readline);

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// r1.question('Enter a number', (input) => {
//     console.log(`You entered ${input}`);
//     r1.close();
// });

// console.log('\nLast line in the program!');

// using callbacks - but there could be issue about callback hell.
// r1.question("Enter a first number", (input1) => {
//   r1.question("Enter a second number", (input2) => {
//     let sum = parseInt(input1) + parseInt(input2);
//     console.log(`Result is ${sum}`);
//     r1.close();
//   });
// });

// console.log("\nLast line in the program!");

// // Above code using promises

// function enterNumberOne() {
//   return new Promise((resolve, reject) => {
//     r1.question("Enter a first number", (input1) => {
//       var num = parseInt(input1);
//       resolve(num);
//     });
//   });
// }

// function enterNumberTwo(no1) {
//   return new Promise((resolve, reject) => {
//     r1.question("Enter a second number", (input2) => {
//       var num = parseInt(input2);
//       resolve([no1, num]);
//     });
//   });
// }

// function add([no1,no2]){
//     let sum = no1+no2;
//     console.log('Inside add!');
//     console.log(`Result is ${sum}`);
//     r1.close();
// }

// enterNumberOne().then(enterNumberTwo).then(add);

// console.log("\nLast line in the program!");

// above code with the help of async and await

function enterNumber(message) {
  return new Promise((resolve, reject) => {
    r1.question(message, (input) => {
      var num = parseInt(input);
      resolve(num);
    });
  });
}

// async function foo() {
//   let no1 = await enterNumber("Enter first no!");
//   let no2 = await enterNumber("Enter second no!");
//   let sum = no1 + no2;
//   console.log(`Result is ${sum}`);
//   r1.close();
// }
// foo();

(async function () {
  let no1 = await enterNumber("Enter first no!");
  let no2 = await enterNumber("Enter second no!");
  let sum = no1 + no2;
  console.log(`Result is ${sum}`);
  r1.close();
})();// IIFE / Self Executing Function
// Immediately Invoked Function Expression

console.log("\nLast line in the program!");
