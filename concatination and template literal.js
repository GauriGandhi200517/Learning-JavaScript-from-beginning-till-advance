//concatination of strings
let username = "Gauri";
let age = 20;
let message = "My name is " + username + " and I am " + age + " years old.";
console.log(message);
// Output: My name is Gauri and I am 20 years old.
// Using template literals
let username2 = "Gauri";
let age2 = 20;
let message2 = `My name is ${username} and I am ${age} years old.`;
console.log(message);
// Output: My name is Gauri and I am 20 years old.
//advantages of template literals:
// 1. Multi-line strings
let username3 = "Gauri";
let age3 = 20;
let multilineMessage = `My name is ${username}.
I am ${age} years old.
I love to code, eat, and sing.`;
console.log(multilineMessage);

// Output:
// My name is Gauri.
// I am 20 years old.
// I love to code, eat, and sing.

//practice questions 
let hobby = "coding";
let concatenationMessage = "My favorite hobby is " + hobby + ".";
let templateLiteralMessage = `My favorite hobby is ${hobby}.`;
console.log(concatenationMessage);
console.log(templateLiteralMessage);
// Output:
// My favorite hobby is coding.

let cuisine = "Italian food";
let concatenationMessage2 = "I love " + cuisine + ".";
let templateLiteralMessage2 = `I love ${cuisine}.`;
console.log(concatenationMessage);
console.log(templateLiteralMessage);
// Output:
// I love Italian food.
let hobby2 = "cooking";
let multilineMessage3 = `My favorite hobby is ${hobby}.
I spend a lot of time practicing ${hobby}.
It's very rewarding.`;
console.log(multilineMessage);
// Output:
// My favorite hobby is cooking.
// I spend a lot of time practicing cooking.
// It's very rewarding. 
