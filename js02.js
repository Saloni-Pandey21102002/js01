"use strict";

// Day 2:  Operators

// Tasks/Activities:

//  Activity 1: Arithmetic Operations:-✍(◔◡◔)

// 🟢Task 1: Write a program to add two numbers and log the result to the console.

const a = 10;
const b = 20;
const c = a + b;
console.log(c);

// 🟢Task 2: Write a program to subtract two numbers and log the result to the console.

const x = 10;
const y = 20;
const z = x - y;
console.log(z);

// 🟢Task 3: Write a program to multiply two numbers and log the result to the console.

let p = 200;
let q = 2;
let res = p * q;
console.log(res);

// 🟢Task 4: Write a program to divide two numbers and log the result to the console.

let r = 200;
let t = 30;
let result = r / t;
console.log(result);

// 🟢Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let num1 = 100;
let num2 = 7;
let ress = num1 % num2;
console.log(ress);

// Activity 2: Assignment Operators(⓿_⓿)

// 🟢Task 6: Use the += operator to add a number to a variable and log result to the console.

let g = 21;
let h = 12;
g += h;
console.log(g);

// 🟢Task 7: Use the -= operator to subtract a number from a variable and log result to the console.

let s = 23;
let n = 12;
s -= n;

console.log(s);

// Activity 3: Comparision Operators(❤´艸｀❤)

// 🟢Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let numberA = 20;
let numberB = 30;
console.log(numberA > numberB);
console.log(numberA < numberB);

// 🟢Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let numA = 200;
let numB = 199;
console.log(numA >= numB);
console.log(numA <= numB);

// 🟢Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let num3 = 400;
let num4 = 500;
console.log(num3 == num4);
console.log(num3 === num4);

// Activity 4: Logical Operators－(▀̿Ĺ̯▀̿ ̿)

//🟢Task 11:  Write a program that uses the && operator to combine two conditions and log the result to the console.

let age = 35;
if (age >= 18 && age <= 40) {
  console.log("this is true");
}

//🟢Task 12:  Write a program that uses the || operator to combine two conditions and log the result to the console.

let v = 10;
let u = 10;
if (v == 5 || u == 10) {
  console.log("this is also true");
}

//🟢Task 13:  Write a program that uses the ! operator to combine two conditions and log the result to the console.

let d = 13;
let e = 21;
console.log(!d == 12);
console.log(!e == 10);

// Activity 5:  Ternary Operator:(⊙_⊙)？

//🟢Task 14: Write  a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

// const login = true;
const login = false;

const action = login == true ? "like" : "dislike";
console.log(action);
