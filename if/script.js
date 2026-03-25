// exercise 1:Grade checker
let score = 85
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80) {
    console.log("Grade B");

}
else if (score >= 70) {
    console.log("Grade C");

} else {
    console.log("Grade F");

}

// Exercise 2: Even or Odd?

let num = 7;
if (num % 2 == 0) {
    console.log(num, "is Even");

} else {
    console.log(num, "is Odd");

}

// Exercise 3: Age Access

const age = 15;
if (age >= 18) {
    console.log("R-rated movie allowed");

} else if (age >= 13) {
    console.log("PG-13 movie allowed");

}
else {
    console.log("Only G movies allowed");

}

// Exercise 4: Temperature Alert

let temp = 25;
if (temp > 30) {
    console.log("Wear light clothes and sunscreen");

}
else if (temp >= 20 && temp <= 30) {
    console.log("Wear casual clothes");

}
else if (temp >= 10 && temp <= 20) {
    console.log("Wear a jacket");

} else {
    console.log("Wear heavy winter gear");

}

// Exercise 5: Login Validator

let username = "admin";
let password = "wrong123"
if (username === "admin" && password === "password123") {
    console.log("Login successful");

} else if (username !== "admin" && password === "password123") {
    console.log("Username incorrect");

} else {
    console.log("Password incorrect");

}

// Exercise 6: Traffic Light

let light = 'yellow';
if (light === "red") {
    console.log("STOP");

} else if (light === "yellow") {
    console.log("SLOW DOWN");

}
else if (light === "green") {
    console.log("SLOW DOWN");

} else {
    console.log("Invalid traffic light");

}

// Exercise 7: Shopping Discount

let amount = 600;
let member = true;

let discount = 0;

// Main discount
if (amount >= 1000) {
    discount = 20;
} 
else if (amount >= 500 && amount< 1000) {
    discount = 10;
} 
else if (amount >= 100 && amount< 500) {
    discount = 5;
} else {
    discount = 0;
}

// Extra membership discount
if (member) {
    discount += 5;
}

// Final price calculation
let finalPrice = amount - (amount * discount / 100);

console.log("Final price =", finalPrice);

// Exercise 8: Number Classifier
// Write a program that classifies a number:
// • Positive, Negative, or Zero
// • Even or Odd (if not zero)
// • Single digit or Multi-digit (if not zero)
// Example Input: number = -15
// Expected Output: "Negative, Odd, Multi-digit"