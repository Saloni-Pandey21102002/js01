"use strict";

// Day7️⃣ : Object😉😉

// TASK / ACTIVITIES:

// 🟢Task 1: Create an object representing a book with properties like title, author, and year , and log to the console.

let book = {
  tittle: "About Me",
  author: "Saloni Pandey",
  year: 2030,
};
console.log(book);

//🟢Task 2: Access and log the tittle and author properties of the book object.

console.log(book.tittle);
console.log(book.author);

//Activity 2: Object Methods

//🟢Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book = {
  title: "1984",
  author: "George Orwell",

  getDetails: function () {
    return `${this.title} , ${this.author}`;
  },
};
console.log(book.getDetails());

//🟢Task 4: Add a method to the book object that takes parameter (Year) and updates the book's year property, then log the updated object.

book = {
  tittle: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: "1925",

  updateYear: function (newYear) {
    return (this.year = newYear);
  },
};
console.log(book.updateYear(2024));

//Activity 3: Nested Objects:

//🟢 Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to to the console.

let library = {
  name: "Cetral Library",
  books: [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  ],
};
console.log(library);

//🟢Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
console.log(library.books[0].title);
console.log(library.books[1].title);

// Activity 4: The this Keyword

//🟢Task 7: Add a method to the book object that uses the this keyword to return a string with the bool's title and year, and log the result of calling this method.

let books = {
  title: "The Great Gatsby",
  year: 1925,
  getBookDetails: function () {
    return this.title + "(" + this.year + ")";
  },
};
console.log(books.getBookDetails());

// Activity 5: Object Iteration:

//🟢 Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
for (const key in book) {
  console.log("keys", key);
  console.log("values", book[key]);
}

//🟢 Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

book = {
  title: "The Great Gatsby",
  year: 1925,
  author: "F. Scott Fitzgerald",
};
console.log(Object.keys(book));
console.log(Object.values(book));
