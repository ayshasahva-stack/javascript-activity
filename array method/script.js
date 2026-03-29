// forEach()

// Basic (5)

// 1 Print all elements of an array. [1, 2, 3] 1, 2, 3
// let arr = [1, 2, 3]
// arr.forEach((item) => console.log(item))


// 2 Print each number after adding 10. [1, 2, 3] 11, 12, 13
// let number = [1, 2, 3]
// number.forEach((item) => console.log(item + 10))

// 3 Print the square of each number. [2, 3, 4] 4, 9, 16
// let square = [2, 3, 4]
// square.forEach((item) => console.log(item ** 2))

// 4 Print all strings in uppercase. ['apple', 'banana'] APPLE, BANANA
// let str = ['apple', 'banana']
// str.forEach((item) => console.log(item.toUpperCase()))

// 5 Count the total elements using an external variable. [10, 20, 30, 40] count = 4
// let value = [10, 20, 30, 40]
// let count = 0
// value.forEach((item) => count++
// )
// console.log(count);


// Intermediate (5)
// 1 Sum all numbers using an external variable. [5, 10, 15] sum = 30
// let numbers = [5, 10, 15];
// let sum = 0
// numbers.forEach((item) => sum += item)
// console.log(sum);


// 2 Count how many even numbers are in the array. [2, 5, 8, 11, 14] evenCount = 3
// let array = [2, 5, 8, 11, 14]
// let even = 0
// array.forEach((item) => {
//     if (item % 2 === 0) {
//         even++
//     }
// })
// console.log(even);

// 3 Push doubled values into a new array. [1, 2, 3] [2, 4, 6]
// let arrays = [1, 2, 3];
// let result = [];

// arrays.forEach((item) => {
//     result.push(item * 2);
// });

// console.log(result);

// 4 Print each index along with its value. ['a', 'b', 'c'] 0:a, 1:b, 2:c

// let values = ['a', 'b', 'c'];

// values.forEach((value, index) => {
//     console.log(index + ":" + value);
// });

// 5 Convert an array of words into their lengths. ['book', 'pen', 'notebook'] [4, 3, 8]

// let words = ['book', 'pen', 'notebook'];
// let lengths = [];

// words.forEach((word) => {
//     lengths.push(word.length);
// });

// console.log(lengths);

// Advanced (4)
// 1 Flatten a 2D array using only forEach(). [[1, 2], [3, 4]] [1, 2, 3, 4]
// let arr = [[1, 2], [3, 4]];
// let result = [];

// arr.forEach((inner) => {
//     inner.forEach((num) => {
//         result.push(num);
//     });
// });

// console.log(result);
// 2 Group numbers into even and odd categories in an object. [1, 2, 3, 4, 5] { even: [2, 4], odd: [1, 3, 5] }
// let arr = [1, 2, 3, 4, 5];

// let result = {
//     even: [],
//     odd: []
// };

// arr.forEach((num) => {
//     if (num % 2 === 0) {
//         result.even.push(num);
//     } else {
//         result.odd.push(num);
//     }
// });

// console.log(result);

// 3 Count the frequency of each element in an array. [1, 2, 1, 3, 2, 1] { 1: 3, 2: 2, 3: 1 }
// let arr = [1, 2, 1, 3, 2, 1];

// let freq = {};

// arr.forEach((num) => {
//     if (freq[num]) {
//         freq[num]++;
//     } else {
//         freq[num] = 1;
//     }
// });

// console.log(freq);

// 4 Build an object from an array of keys and default values. ['name', 'age'] { name: 'N/A', age: 'N/A' }
// let keys = ['name', 'age'];
// let result = {};

// keys.forEach((key) => {
//     result[key] = 'N/A';
// });

// console.log(result);

// map()

// Basic (5)

// 1 Double each number in an array. [1, 2, 3] [2, 4, 6]
// let array=[1, 2, 3]
// let result=array.map((item)=>item*2)
// console.log(result);

// 2 Convert numbers into strings. [10, 20] ['10', '20']
// let arr=[10, 20]
// let str=arr.map((item)=>item.toString())
// console.log(str);

// 3 Convert all strings to uppercase. ['a', 'b'] ['A', 'B']
// let str=['a', 'b']
// let upper=str.map((item)=>item.toUpperCase())
// console.log(upper);

// 4 Get the length of each word. ['cat', 'house'] [3, 5]
// let word=['cat', 'house']
// let length=word.map((item)=>item.length)
// console.log(length);

// 5 Add 5 to every element. [1, 2, 3] [6, 7, 8] 

// let array=[1, 2, 3]
// let result=array.map((item)=>item+5)
// console.log(result);

// Intermediate (5)
// 1 Extract only the names from an array of objects. [{ name: 'A' }, { name: 'B' }] ['A', 'B']
// let array=[{ name: 'A' }, { name: 'B' }]
// let result=array.map((item)=>item.name)
// console.log(result);

// 2 Add GST to each product price. [{ price: 500 }, { price: 1000 }] [590, 1180]
// let array=[{ price: 500 }, { price: 1000 }]
// let result=array.map((item)=>item.price*1.18)
// console.log(result);


// 3 Create an array showing whether each number is even. [1, 2, 3] [false, true, false]
// let array=[1, 2, 3]
// let result=array.map((item)=>item%2===0)
// console.log(result);


// 4 Format first name and last name into full names. [{ first: 'A', last: 'B' }] ['A B']
// let array=[{ first: 'A', last: 'B' }]
// let result=array.map((item)=>item.first+" "+item.last)
// console.log(result);

// 5 Convert an array into objects like { value: x }. [1, 2] [{ value: 1 }, { value: 2 }]
// let arr = [1, 2];
// let result = arr.map(item => ({ value: item }));
// console.log(result);


// // Advanced (4)
// 1 Transform a nested array into a new structure. [[1, 2], [3, 4]] [[2, 4], [6, 8]]
// let arr = [[1, 2], [3, 4]];
// let result = arr.map(item =>item.map(num => num * 2));
// console.log(result);

// 2 Add a computed property to each object. [{ name: 'A', score: 10 }] [{ name: 'A', score: 10, grade: 'A' }]
// let arr = [{ name: 'A', score: 10 }];
// let result = arr.map(item => ({...item,grade: 'A'}));
// console.log(result);

// // // 3 Convert an array into an indexed object-like structure. ['x', 'y'] [{ index: 0, value: 'x' }, { index: 1, value: 'y' }]
// let arr = ['x', 'y'];
// let result = arr.map((value, index) => ({index: index,value: value}));
// console.log(result);

// 4 Normalize a sample API response into a clean array. [{ id: 1, name: 'A', role: 'admin' }, { id: 2, name: 'B', role: 'user' }] [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]
// let data = [
//     { id: 1, name: 'A', role: 'admin' },
//     { id: 2, name: 'B', role: 'user' }
// ];

// let result = data.map(({ id, name }) => ({ id, name }));

// console.log(result);


// filter()

// Basic (5)
// 1 Get all even numbers from an array. [1, 2, 3, 4] [2, 4]
// let array=[1, 2, 3, 4]
// let result=array.filter((item)=>item%2===0)
// console.log(result);

// 2 Get numbers greater than 10. [5, 12, 18] [12, 18]
// let array=[5, 12, 18]
// let result=array.filter((item)=>item>10)
// console.log(result);

// 3 Filter strings longer than 5 characters. ['apple', 'banana', 'pear'] ['banana']
// let array= ['apple', 'banana', 'pear']
// let result=array.filter((item)=>item.length>5)
// console.log(result);

// 4 Remove falsy values from an array. [0, 1, false, '', 2] [1, 2]
// let array= [0, 1, false, '', 2]
// let result=array.filter((item)=>item)
// console.log(result);


// 5 Get all positive numbers. [-2, -1, 0, 1, 2] [1, 2]
// let array=[-2, -1, 0, 1, 2]
// let result=array.filter((item)=>item>0)
// console.log(result);


// Intermediate (5)
// 1 Filter users who are above 18 years old. [{ age: 20 }, { age: 17 }] [{ age: 20 }]
// let array=[{ age: 20 }, { age: 17 }]
// let result=array.filter((item)=>item.age>18)
// console.log(result);

// 2 Get products with price below 1000. [{ price: 800 }, { price: 1200 }] [{ price: 800 }]
// let array=[{ price: 800 }, { price: 1200 }]
// let result=array.filter((item)=>item.price<1000)
// console.log(result);

// 3 Remove duplicate values from an array. [1, 2, 1, 3, 2] [1, 2, 3]
// let array=[1, 2, 1, 3, 2]
// let result = array.filter((item, index) => array.indexOf(item) === index);
// console.log(result);

// 4 Filter only active users. [{ active: true }, { active: false }] [{ active: true }]
// let array=[{ active: true }, { active: false }]
// let result=array.filter((item)=>item.active)
// console.log(result);

// 5 Filter words that start with the letter a. ['apple', 'banana', 'apricot'] ['apple', 'apricot']
// let array=['apple', 'banana', 'apricot']
// let result=array.filter((item)=>item.startsWith('a'))
// console.log(result);

// reduce()
// Basic (5)
// 1 Find the sum of all numbers. [1, 2, 3] 6
// let array= [1, 2, 3]
// let result=array.reduce((total,num)=>total+num, 0)
// console.log(result);

// 2 Multiply all numbers in an array. [2, 3, 4] 24
// let array= [2, 3, 4]
// let result=array.reduce((total,num)=>total*num)
// console.log(result);

// 3 Count the total number of elements. ['a', 'b', 'c'] 3
// let arr=['a', 'b', 'c']
// let result=arr.reduce((count)=>count+1,0)
// console.log(result);



// 4 Find the maximum number. [5, 9, 2] 9
// let arr = [5, 9, 2];

// let max = arr.reduce((largest, num) => {
//     return num > largest ? num : largest;
// }, arr[0]);

// console.log(max);

// 5 Concatenate all strings into one string. ['a', 'b', 'c'] 'abc'
// let arr = ['a', 'b', 'c'];

// let result = arr.reduce((total, str) => total + str, "");

// console.log(result);