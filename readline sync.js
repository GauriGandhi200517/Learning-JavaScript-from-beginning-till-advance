// filepath: d:\JAVA SCRIPT\Learning-JavaScript-\readline sync.js
const readlineSync = require('readline-sync');

// Get user input
const userName = readlineSync.question('What is your name? ');
console.log(`Hello, ${userName}!`);

// Get numeric input
const userAge1 = readlineSync.questionInt('How old are you? ');
console.log(`You are ${userAge} years old.`);


const userAge2 = readlineSync.question('May I know your age? ');

// Convert the input to a number
const userAge1Number = Number(userAge);

// Check if the conversion was successful
if (!isNaN(userAgeNumber)) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`You were born in the year ${birthYear}.`);
} else {
    console.log('Please enter a valid number for age.');
}