let numberList = [];

for(let i=0;i<10;i++)
{
    let temp = Math.floor(Math.random() * 900) + 100;
    numberList[i] = temp;
}

numberList.sort();
for(let i=0;i<10;i++)
    console.log(numberList[i]);

console.log("Second last maximum number is: "+numberList[8]);
console.log("Second last minimum number is: "+numberList[1]);
