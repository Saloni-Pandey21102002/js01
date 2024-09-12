"use strict";

// Day 6️⃣: Arrays😉

//Tasks/ Activities:

//Activity 1: Array Creation and Access

// 🟢Task 1: Creates an array of numbers from 1 to 5 and log the array to the console.

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// 🟢Task 2: Access the first and last elements of the array and log them to console.

const arr1 = [1, 2, 3, 4, 5];
const firstEl = arr1[0];
const lasEl = arr[arr.length - 1];
console.log(firstEl);
console.log(lasEl);

//Activity 2: Array Methods (Basic)

// 🟢 Task 3: Use the push method to add a new number to the end of the array and log the updated array.

let arr2 = [1, 2, 3, 45, "Hello"];
arr2.push("World");
console.log(arr2);

// 🟢Task 4: Use the pop method to remove the last element from  the array and log the updated array.

let arr3 = [1, 2, 3, 45, 5, 6];
arr3.pop();
console.log(arr3);

// 🟢Task 5: Use the shifted method to remove the first element from  the array and log the updated array.

let arr4 = [1, 2, 3, 4, 5];
arr4.shift();
console.log(arr4);

// 🟢Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

let arr5 = [1, 23, 4, 5];
arr5.unshift(6);
console.log(arr5);

// Activity 3: Array Methods(Intermidiate)

// 🟢Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const num = [2, 3, 4, 5, 6];
const doubleNum = num.map((el) => el * 2);
console.log(doubleNum);

// 🟢Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let num1 = [2, 3, 4, 5, 6, 7, 8];
let printOnlyEvenNum = num1.filter((el) => el % 2 === 0);
console.log(printOnlyEvenNum);

// 🟢Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

let arr6 = [10, 20, 30, 40];
let sumOfallNum = arr6.reduce((acc, el) => acc + el, 0);
console.log(sumOfallNum);

//Activity 4: Array Iteration

// 🟢Task 10: Use a for loop to iterate over the array and log each element to the console.

let arr7 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
}

// 🟢Task 11: Use the foreach method to iterate over the array and log each element to the console.

let arr8 = [1, 2, 3, 4, 5];
arr8.forEach((el) => {
  console.log(el);
});

// Activity 5: Multi-dimensional Arrays

// 🟢Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let arr9 = [];
for (let i = 0; i < 4; i++) {
  arr9[i] = [];
  for (let j = 0; j < 4; j++) {
    arr9[i].push(j);
  }
}
console.log(arr9);

// 🟢 Task 13: Access and log a specific element from the two-dimensional array.

console.log(arr9[1]);
