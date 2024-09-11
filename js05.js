// Day 5️⃣: Functions 😉

// Tasks/ Activities:-

// Activity 1: Function Declaration

// 🟢Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenorOdd(a) {
  if (a % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("The number is odd");
  }
}
checkEvenorOdd(10);

// 🟢Task 2: Write a function to calculate the square of a number and return the result.

function squareNumber(a) {
  return a ** 2;
}
console.log(squareNumber(5));

//Activity 2: Function Expression

// 🟢Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const maxNumber = function (a, b) {
  if (a > b) {
    console.log(a + "is maximum");
  } else if (b > a) {
    console.log(b + " is maximum");
  } else {
    console.log("Both are equal");
  }
};
maxNumber(30, 30);

//🟢Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStr = function (str, str1) {
  return str + str1;
};
console.log(concatenateStr("Hello", "World"));

// Activity 3: Arrow Functions

// 🟢Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (a, b) => a + b;
console.log(sum(2, 3));

// 🟢Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkSpecificChar = (string, char) => {
  for (const charr of string) {
    if (charr == char) return true;
  }
  return false;
};
console.log(checkSpecificChar("Aashish", "@"));

// Activity 4: Function Paramemeters and Default Values

// 🟢Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function productTheNum(a, b = 3) {
  return a * b;
}
// console.log(productTheNum(5, 7));
console.log(productTheNum(7));

// 🟢Task 8: Write a function that takes a person's name and age returns a greeting message. Provide a default value for the age.
function greet(name, age = "unknown") {
  return `Hello, ${name}! You are ${age} years old.`;
}

// Example usage:
console.log(greet("Alice", 25));
console.log(greet("Bob"));

// Activity 5: Higher-Order Functions

//  🟢Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function printHi() {
  console.log("saloni");
}
function higherOrderFn(fn, num) {
  for (let i = 1; i <= num; i++) {
    fn();
  }
}
higherOrderFn(printHi, 5);

// 🟢Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function mul(num) {
  return num * num;
}

function kuchbhi(fn1, fn2, num) {
  const res1 = fn1(num);
  const res2 = fn2(res1);
  return res2;
}

console.log(kuchbhi(mul, mul, 2));
