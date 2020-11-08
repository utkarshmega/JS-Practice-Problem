let myMap = new Map();
while(true) {
    let number = Math.floor(Math.random() * 6) + 1;
    if(myMap.has(number))
        myMap.set(number, myMap.get(number)+1);
    else
        myMap.set(number, 1);

    if(myMap.get(number) == 10)
        break;
}
console.log(myMap);
let min = 11;
minNumber = 0;
for(let [key, value] of myMap.entries()) {
    if(value == 10)
        console.log("Number with maximum times: Key: "+key+" Value: "+value);
    if(value<min){
        min = value;
        minNumber = key;
    }
}

console.log("Number with minimum times: "+minNumber+" Values: "+min);