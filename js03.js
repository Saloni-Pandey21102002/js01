"use strict";

// Day 3️⃣: Control Structure

// Task / Activities:-

// Activity 1: If-else Statements

// 🟢Task 1: Write a program to check if a number is positive, negative ,or zero, and log the result  to the console.

let num = 0;
if (num > 0) {
  console.log("positive");
}
if (num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// 🟢Task 2: Write a program to check if a person is eligible to vote (age >=18) and log the result  to the console.

let age = 60;
if (age >= 18) {
  console.log("The person is eligible to vote");
} else {
  console.log("Not Eligible");
}

// Activity 2: Nested If-Else Statements

// 🟢Task 3: Write a program to find the latgest of three mnumbers using nested if-else statements.

let num2 = 20;
let num3 = 30;
let num4 = 40;
let largest;

if (num2 >= num3) {
  if (num2 >= num4) {
    largest = num1;
  } else {
    largest = num4;
  }
} else {
  if (num3 >= num4) {
    largest = num3;
  } else {
    largest = num4;
  }
}
console.log("The largest number is:", largest);

//Activity 3: Switch Case

// 🟢Task 4:  a Writeprogram that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");

    break;
  case 3:
    console.log("Wednesday");

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}

// 🟢Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on score and log the grade to the console.

let score = 90;
let grade;
switch (true) {
  case score >= 90:
    score >= 90;
    grade = "A";
    break;
  case score >= 80:
    score >= 80;
    grade = "B";
    break;
  case score >= 70:
    score >= 70;
    grade = "C";
    break;
  case score >= 60:
    score >= 60;
    grade = "D";
    break;
  default:
    grade = "F";
    break;
}

console.log("the grade is : " + grade);

//Activity 4 : Conditional (Ternary) Operator

// 🟢Task 6: Write a program that uses the ternary operator to check if a number is even of odd and log the result to the console.

const num1 = 13;
const checkNumber = num1 % 2 === 0 ? "even" : "odd";

console.log(checkNumber);

// Activity 5: Combining Conditions

// 🟢Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible  by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2021;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("This is leap year");
} else {
  console.log("This is not leap year");
}
