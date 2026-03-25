// LEVEL 1: BEGINNER
// Exercise 1: Day of Week

let dayNumber = 5;
switch (dayNumber) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;

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
        console.log("Invalid day number");


}

// Exercise 2: Fruit Color

let fruit = "banana";
switch (fruit) {


    case "apple":
        console.log("red");
        break;

    case "banana":
        console.log("yellow");
        break;

    case "grape":
        console.log("purple");
        break;

    case "lime":
        console.log("green");
        break;

    default:
        console.log("Unknown fruit");

}

// Exercise 3: Browser Detection

const browser = "Firefox";
switch (browser) {

    case "Chrome":
        console.log("V8 Engine");
        break;

    case "Firefox":
        console.log("SpiderMonkey");
        break;

    case "Safari":
        console.log("JavaScriptCore");
        break;

    case "Edge":
        console.log("V8 Engine");
        break;

    default:
        console.log("Unknown browser");

}

// LEVEL 2: INTERMEDIATE

// Exercise 4: Vowel Checker
let char = "E";

switch (char.toLowerCase()) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;

    case "b": case "c": case "d": case "f": case "g":
    case "h": case "j": case "k": case "l": case "m":
    case "n": case "p": case "q": case "r": case "s":
    case "t": case "v": case "w": case "x": case "y": case "z":
        console.log("Consonant");
        break;

    default:
        console.log("Invalid input");
}

// Exercise 5: Simple Calculator

let num1 = 10;
let num2 = 5;
let operator = "*"


switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "%":
        console.log(num1 % num2);
        break;

    default:
        console.log("Invalid operator");

}

// Exercise 6: Month Days

let month = "february";
let isLeapYear = true;
switch (month) {
    case "january":
        console.log(31);
        break;
    case "march":
        console.log(31);
        break;

    case "may":
        console.log(31);
        break;

    case "july":
        console.log(31);
        break;

    case "august":
        console.log(31);
        break;

    case "october":
        console.log(31);
        break;

    case "december":
        console.log(31);
        break;

    case "april":
        console.log(30);
        break;

    case "june":
        console.log(30);
        break;

    case "september":
        console.log(30);
        break;

    case "november":
        console.log(30);
        break;

    case "february":
        if (isLeapYear) {
            console.log(29);
        } else {
            console.log(28);
        }
        break;

    default:
        console.log("Invalid month");

}

// Exercise 7: Grade Point Average (GPA)

const grade = "b";
switch (grade.toUpperCase()) {
    case "A":
        console.log(4.0);
        break;
    case "B":
        console.log(3.0);
        break;
    case "C":
        console.log(2.0);
        break;
    case "D":
        console.log(1.0);
        break;
    case "F":
        console.log(0.0);
        break;
    default:
        console.log("Invalid grade");

}

// LEVEL 3: ADVANCED

// Exercise 8: Size Converter

let usSize = "M";
switch (usSize) {
    case "XS":
        console.log("US:XS → EU:32 ");
        break;
    case "S":
        console.log("US:S → EU:34 ");
        break;
    case "M":
        console.log("US:M → EU:36 ");
        break;
    case "L":
        console.log("US:L → EU:38 ");
        break;
    case "XL":
        console.log("US:XL → EU:40 ");
        break;
    case "XXL":
        console.log("US:XXL → EU:42 ");
        break;
    default:
        console.log("Invalid size");

}

// Exercise 9: Priority Level Handler

let priorityNumber = 2;
let priority;
switch (priorityNumber) {
    case 1:
        priority = "critical"
        console.log("Stop everything, fix now!");
        break;
    case 2:
        priority = "high"
        console.log("Do this this today");
        break;
    case 3:
        priority = "medium"
        console.log("Do this  week");
        break;
    case 4:
        priority = "low"
        console.log("Add to backlog");
        break;
    default:
        console.log("Priority not recognized");

}

// Exercise 10: HTTP Status Code Explainer

let statusCode = 404;
switch (statusCode) {
    case 200:
        console.log("OK: Request successful");
        break;
    case 201:
        console.log("Created: Resource created successfully");
        break;
    case 400:
        console.log("Bad Request: Invalid request");
        break;
    case 401:
        console.log("Unauthorized: Authentication required");
        break;
    case 403:
        console.log("Forbidden: Access denied");
        break;
    case 404:
        console.log("Not Found: Resource not found");
        break;
    case 500:
        console.log("Internal Server Error");
        break;
    default:
        console.log("Unknown status code");

}
// CHALLENGE PROBLEMS

// Challenge 1: Season Identifier

let months = 7;
let season, advice, temp;
switch (months) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        advice = "Wear warm clothes";
        temp = "~10°C";
        console.log(season, temp, advice);
        break;

    case 3:
    case 4:
    case 5:
        season = "Spring";
        advice = "Wear light jacket";
        temp = "~20°C";
        console.log(season, temp, advice);
        break;

    case 6:
    case 7:
    case 8:
        season = "Summer";
        advice = "Wear light clothes";
        temp = "~30°C";
        console.log(season, temp, advice);
        break;

    case 9:
    case 10:
    case 11:
        season = "Fall";
        advice = "Wear comfortable clothes";
        temp = "~22°C";
        console.log(season, temp, advice);
        break;

    default:
        console.log("invalid months");

}

// Challenge 2: File Type Identifier

let fileName = "photo.png";
let ext = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
let result;
switch (ext) {
    case ".jpg":
    case ".png":
    case ".gif":
        console.log("Image file - [1920 x 1080]");
        break;
    case ".mp3":
    case ".wav":
    case ".flac":
        console.log("Audio file - [4:00]");
        break;
    case ".mp4":
    case ".avi":
    case ".mkv":
        console.log("Video file - [1080p]");
        break;
    case ".txt":
    case ".pdf":
    case ".docx":
        console.log("Document file - [100 pages]");
        break;
    default:
        console.log("Unknown file type");
}

// Challenge 4: Language Greeting

let languageCode = "ja"
let greeting,lang;
switch(languageCode){
    case "en":
        lang="English";
        greeting= "Hello! Welcome";
        break;
    case "es":
        lang="Spanish";
        greeting= "¡Hola! Bienvenido";
        break;
    case "fr":
        lang="French"
        greeting= "Bonjour! Bienvenue";
        break;
    case "de":
        lang="German"
        greeting= "Hallo! Willkommen";
        break;
    case "ja":
        lang="Japanese";
        greeting=  "こんにちは！ようこそ";
        break;
    case "hi":
        lang="Hindi";
        greeting= "नमस्ते! आपका स्वागत है";
        break;
    default:
        console.log("Language not supported"); 
        
}
console.log(lang,greeting);

