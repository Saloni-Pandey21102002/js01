"use strict";

// Day 8️⃣: ES6 + Features😉

// TASK / ACTIVITIES:

// Activity : Template Literals

// Task 1: Use template literals to crate a string includes variables for a person's name and age, and log the string to the console.

const personName = "Alice";
const age = 30;
console.log(`Helo i am ${personName} and I am  ${age} year old`);

// Task 2: Create a muiti-line string using template literals and log it to the console.

const multilineStr = `This is a multi-line string.
It spans multiple lines,
and you can include as many lines as you need.
No need for escape characters or concatenation!`;

console.log(multilineStr);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second  elements from an array of numbers and log them to the console.

const array = [10, 20, 30, 40];
const [a, b] = array;
console.log(a, b);

// Task4: Use object destructuring to extract the title and author from a book object and log them to console.

const book = {
  title: "1984",
  author: "George Orwell",
  year: 1925,
};

const { title, author, year } = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators:

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const arr = [10, 20, 30, "hello"];
const newArr = [...arr, "world", "hii", 50];
console.log(newArr);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sumOfThem(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}
console.log(sumOfThem(2, 3, 4, 5));
console.log(sumOfThem(20, 30, 40, 90));
console.log(sumOfThem(2, 3));

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function productOfNum(a, b = 1) {
  return a * b;
}
console.log(productOfNum(5, 4));

console.log(productOfNum(5));

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const name = "Eren";
const age1 = 20;

const obj = {
  name,
  age1,
};
console.log(obj);

// Task 9: Create an object with computed property names based on variables and log the object to console.

const propertyName1 = "firstName";
const propertyName2 = "lastName";

const obj1 = {
  [propertyName1]: "Alice",
  [propertyName2]: "Johnson",
  ["fullname"]: `${propertyName1} ${propertyName2}`,
};

console.log(obj1);
