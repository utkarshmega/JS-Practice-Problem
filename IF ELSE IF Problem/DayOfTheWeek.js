const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter the number between 1 and 7 : '));
let day;
if (number == 1) {
    day = 'Monday';
} else if (number == 2) {
    day = 'Tuesday';
} else if (number == 3) {
    day = 'Wednesday';
} else if (number == 4) {
    day = 'Thursday';
} else if (number == 5) {
    day = 'Friday';
} else if (number == 6) {
    day = 'Saturday';
} else if (number == 7) {
    day = 'Sunday';
} else {
    console.log("Invalid Input");
}

console.log('Day of the Week is: ' + day);