// Beginner Level
// 1) Nested Loops

// Q1. Print numbers from 1 to 3, three times each using nested loops.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

// Q2. Print a 3 x 3 square of stars.

for (let i = 1; i <= 3; i++) {
    let row = ""
    for (let j = 1; j <= 3; j++) {
        row += "*"
    }
    console.log(row);

}

// Q3. Write a loop that prints multiplication pairs from 1 to 2 and 1 to 4.

for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 4; j++) {
        console.log(i + "x" + j);

    }
}

// 2) Arrow Functions

// Q1. Create an arrow function that returns the square of a number.

let square = (a) => a ** 2
console.log(square(4));

// Q2. Write an arrow function that checks whether a number is even.

let even = (a) => a % 2 === 0
console.log(even(4));

// Q3. Make an arrow function that joins first name and last name.

let name = (first, last) => first + last
console.log(name('A', 'B'));

// 3) Anonymous Functions

// Q1. Store an anonymous function in a variable and print your name.

const greet = function () {
    console.log("aysha sahva");

}
greet()

// Q2. Use an anonymous function inside setTimeout to print a message after 2 seconds.

setTimeout(function () {
    console.log("Message appears later");
}, 2000);

// Intermediate Level

// 4) IIFE

// Q1. Write an IIFE that prints 'Welcome to JavaScript'.

(() => {
    console.log('Welcome to JavaScript');

})();

// Q2. Create an IIFE that stores a secret number and prints it.

(function () {
    let secret = 42
    console.log(secret);
})();

// 5) Callbacks

// Q1. Create a function that takes a number and a callback, then passes the doubled value to the callback.

function number(num, callback) {
    let result = num * 2
    callback(result)
}
function double(res) {
    console.log(res);
}
number(5, double)

// 2. Write a function that prints 'Task done' after a custom callback runs.

function task(callback) {
    callback()
    console.log("task done");

}
function second() {
    console.log("running task");

}
task(second)

// Q3. Pass an anonymous function as a callback to print a success message.
// Example: Success!
// Hint: Use function() { ... } or an arrow function.

function task(callback) {
    callback()
}
task(function () {
    console.log("success!");

})

// 6) Mixed Practice

// Q1. Use an arrow function inside a loop to print 1 to 5.

let result=(n)=>
console.log(n);
for (let i=1;i<=5;i++){
    result(i)
    
}

// Q2. Write a nested loop that prints a 4-row triangle of stars.
// Example: * / ** / *** / ****
// Hint: Inner loop depends on row number
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}