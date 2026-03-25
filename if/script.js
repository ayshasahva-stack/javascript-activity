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

// LEVEL 2: INTERMEDIATE.

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

// LEVEL 3: ADVANCED

// Exercise 7: Shopping Discount

let amount = 600;
let member = true;

let discount = 0;

// Main discount
if (amount >= 1000) {
    discount = 20;
}
else if (amount >= 500 && amount < 1000) {
    discount = 10;
}
else if (amount >= 100 && amount < 500) {
    discount = 5;
} else {
    discount = 0;
}

//check membership
if (member) {
    discount += 5;
}

// Final calculation
let finalPrice = amount - (amount * discount / 100);

console.log("Final price =", finalPrice);

// Exercise 8: Number Classifier

let number = -15
let result = "";
// Positive, Negative, or Zero
if (number > 0) {
    result += "Positive,"

} else if (number < 0) {
    result += "Negative,"

} else {
    result += "zero,"

}

// Even or Odd (if not zero)
if (number % 2 === 0) {
    result += "Even,"

} else {

    result += "Odd,"

}

// Single digit or Multi-digit 
let absNum = Math.abs(number);
if (absNum < 10) {
    result += "Single digit"
} else {
    result += " Multi-digit"
}
console.log(result);

// Exercise 9: Leap Year Checker

let year = 2024;
if (year % 400 === 0) {
    console.log(year, " is a leap year");

} else if (year % 100 === 0) {
    console.log(year, "NOT a leap year");

} else if (year % 4 === 0) {
    console.log(year, " is a leap year");

} else {
    console.log(year, " NOT a leap year");

}


// CHALLENGE PROBLEMS

// Challenge 1: Calculator with Validation

let num1 = 10;
let num2 = 0;
let operator = "/"
let results;

if (operator === "+") {
    results = num1 + num2
}
else if (operator === "-") {
    results = num1 - num2
}
else if (operator === "*") {
    results = num1 * num2
} else if (operator === "/") {
    if (num2 === 0) {
        console.log("Cannot divide by zero");

    } else {
        results = num1 / num2
    }
} else {
    console.log("Invalid operator");

}

// Challenge 2: Library Fine Calculator
// Write a program that calculates library book fine:
// • Books returned on time: No fine
// • 1-7 days late: $0.50 per day
// • 8-14 days late: $1.00 per day (+ previous fine)
// • 15+ days late: $2.00 per day (+ previous fine) + 50% penalty
// Example Input: daysLate = 10
// Expected Output: Fine = $10.50

// Challenge 3: Student Status Checker

let attendance = 92;
let grade = 85;

if (attendance >= 95 && grade >= 90) {
    console.log("Excellent");

} else if (attendance >= 90 && grade >= 80) {
    console.log("Good");


}
else if (attendance >= 75 && grade >= 70) {
    console.log("Pass");


}
else {
    console.log("Need Improvement");
}



