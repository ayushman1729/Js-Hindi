const score=400
// console.log(score);

const balance= new Number(100)   //Number type defind good way 
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);  //String is object
// console.log(balance.toFixed(2));  //100.00

const otherNumber = 123.8966  //stating se 4 digit precious ho jayaga

console.log(otherNumber.toPrecision(5));  // accurate ka aas pass kr dega ye 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 10,00,000
  
// *********************   Maths    ********************

// console.log(Math);
// console.log(Math.abs(-4))  //minus change in plus
// console.log(Math.round(4.98));  //5
//console.log(Math.round(4.49));  // 4

console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)