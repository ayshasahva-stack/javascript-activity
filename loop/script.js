// LEVEL 1: BEGINNER

// Exercise 1: Sum All Numbers (for loop)

let arr = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

// Exercise 2: Print Array (for-of loop)

let animals = ["cat", "dog", "bird"];

for (let animal of animals) {
    console.log(animal);
}

// Exercise 3: Object Properties (for-in loop)

let obj = {
    name: "Alice",
    age: 25,
    city: "NYC"
}
for (let key in obj) {
    console.log(key + ":" + obj[key]);

}

// Exercise 4: Character Count (for-of loop)

let str = "hello world";
let count = 0;
for (let char of str) {
    if (char !== " ") {
        count++
    }

}
console.log(count);


// LEVEL 2: INTERMEDIATE

// Exercise 5: Multiplication Table (for loop)

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += i + "x" + j + "=" + (i * j) + " ";
    }
    console.log(row);

}

// Exercise 6: Find Maximum (for loop)

let val = [5, 2, 8, 1, 9, 3];
let max = val[0];
let index = 0;
for (let i = 1; i < val.length; i++) {
    if (val[i] > max) {
        max = val[i]
        index = i
    }
}
console.log("max value:" + max);
console.log("index:" + index);

// Exercise 7: Filter Even Numbers (for-of loop)

let array = [1, 2, 3, 4, 5, 6];
let even = [];
for (let num of array) {
    if (num % 2 === 0) {
        even.push(num)
    }
}
console.log(even);


// Exercise 8: Count Property Values (for-in loop)

let data = [
    { status: "active" },
    { status: "active" },
    { status: "inactive" }
];

let result = {};

for (let obj of data)
    for (let key in obj) {
        let value = obj[key];

        if (result[value]) {
            result[value]++;
        } else {
            result[value] = 1;
        }
    }

for (let key in result) {
    console.log(key + ": " + result[key]);
}

//    LEVEL 3: ADVANCED
// Exercise 9: Matrix Operations (nested for loops)
// Write a program that works with a 3x3 matrix (2D array):
// • Print the matrix
// • Calculate row sums
// • Calculate column sums
// • Find diagonal sum (top-left to bottom-right)
// Example Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Expected Output:
// Row sums: [6, 15, 24]
// Column sums: [12, 15, 18]
// Diagonal sum: 15


let matrix=[
    [1, 2, 3], 
    [4, 5, 6], [7, 8, 9]]
// Exercise 10: String Manipulation (for-of + for loop)

let string = "javascript";

let reversed = "";
let vowelCount = 0;


for (let ch of string) {

    if ("aeiou".includes(ch)) {
        vowelCount++;
    }

    reversed = ch + reversed;
}

console.log("Reversed:", reversed);
console.log("Vowel count:", vowelCount);

// Exercise 11: Deep Clone Object (for-in loop)

let original = {
    name: "John",
    age: 30,
    city: "NYC"
};

let copy = {};


for (let key in original) {
    copy[key] = original[key];
}

console.log("Original:", original);
console.log("Copy:", copy);


console.log(original === copy); 

// Exercise 12: Search & Replace (for-of loop)

let aray = [1, 2, 3, 2, 4];
let searchFor = 2;
let replaceWith = 10;

let rslt = [];

for (let item of aray) {
    if (item === searchFor) {
        rslt.push(replaceWith);  
    } else {
        rslt.push(item);        
    }
}

console.log(rslt);



