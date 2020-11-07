const prompt = require('prompt-sync')();

console.log('Enter\n1 for ft to inch \n2 for inch to ft\n3 for ft to meter\n4 for meter to ft');
let choice = parseInt(prompt('Enter your choice '));
let inp;
let value;

switch(choice) {
    case 1:
        inp = parseInt(prompt('Enter the number of feet '));
        value = inp * 12;
        console.log(value);
        break;

    case 2:
        inp = parseInt(prompt('Enter the number of inch '));
        value = inp / 12;
        console.log(value);
        break;

    case 3:
        inp = parseInt(prompt('Enter the number of ft '));
        value = inp / 3.3;
        console.log(value);
        break;

    case 4:
        inp = parseInt(prompt('Enter the number of meter '));
        value = inp * 3.3;
        console.log(value);
        break;

    default:
        console.log('Invalid input');
}