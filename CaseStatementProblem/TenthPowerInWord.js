const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number which is Tenth's power : "));
let words;

switch (number) {
    case 1:
        words = 'Unit';
        break;
    case 10:
        words = 'Ten';
        break;
    case 100:
        words = 'Hundred';
        break;
    case 1000:
        words = 'Thousand';
        break;
    case 10000:
        words = 'Ten Thousand';
        break;
    case 100000:
        words = 'Hundred Thousand';
        break;
    case 1000000:
        words = 'One Million';
        break;
    case 10000000:
        words = 'Ten Million';
        break;
    case 100000000:
        words = 'Hundred Million';
        break;
    case 1000000000:
        words = 'One Billion';
        break;
    default:
        words = 'Improper Input';
        break;
}

console.log(words);