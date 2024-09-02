"use strict";

//// Variable Declaration:-

//Tasks / Activities:

//  1. Declare a variable using var , assign it a number, and log the value to the console .

var x = 12;
// var x = 10;
console.log(x);
console.log(typeof x);

// 2. Declare a variable using let , assign it a string, and log the value to the console.
let str = "12";
console.log(str);
console.log(typeof str);

// Activity 2: Constant Declaration:

const num = 12;
// num = 21;   // here's in const we can  neither declare it again, nor can re-assign its value
console.log(num);

let num1 = 12;

num1 = 21; // here, in let we cannot declare with same name, but can re-assing its value
console.log(num1);

// 3.  Declare a variable using const, assing it a boolean value, and log the value to the console.

const str1 = false;
console.log(typeof str1);

const str2 = true;
console.log(typeof str2);

// // Activity 3: Data Types;

// 4. Create variables of different data types(number , string, boolean, object, array) and log  each variable's type using the typeof operator.

let number = 21;
console.log(number);
console.log(typeof number);

let str3 = "Hello";
console.log(str3);
console.log(typeof str3);

let boolVal = false;
console.log(boolVal);
console.log(typeof boolVal);

let obj = {};
console.log(obj);
console.log(typeof obj);

let arr = [1, 2, 4, "hello"];
console.log(arr);
console.log(typeof Array.isArray(arr));
// console.log(typeof arr);

// Activity 4: Reassigning Variables

// 5. Declare a variable using let, assign it an intial value , reassign a new value, and log  both values to the console.

let a = 10;

a = 20;
console.log(a);

// a = 30;
// console.log(a);

// Activity 5: Understanding const
// 6. Try reassigning a varable declared with const and observe the error.

const y = 11;
// y = 12;
console.log(y);
