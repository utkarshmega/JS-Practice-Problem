const prompt = require('prompt-sync')();

let day = parseInt(prompt('Enter the day: '));
let month = prompt('Enter the Month: ');
let result = false;
if(month == 'March'){
    if(day>20)
        result = true;
}
if (month == 'April' || month == 'May') {
    result = true;
 }
 if (month == 'June') {
     if (day < 20) {
         result = true;
     }
 }
 console.log("Is day and month between given period: " + result);