// Day 4: Loops😉

// Task/ Activities:

// 🟢Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 🟢Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
  console.log(`5*${i} = ${5 * i}`);
}

// Activity 2: While Loop

// 🟢Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

// 🟢Task 4: Write a program to print numbers from 10 to 1 using while loop.

let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}

// Activity 3: Do...While Loop

// 🟢Task 5: Write a program to print numbers from 1 to 5 using a  do...while loop.

let i = 1;
do {
  console.log("i is: " + i);
  i++;
} while (i < 5);

// 🟢Task 6: Write a program to calculate the factorial of a number using a do...while loop.

// Activity 4: Nested Loops

// 🟢Task 7: Write a program to print a patter using nested for loops:

//  *
//  **
//  ***
//  ****
//  *****

let str = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
