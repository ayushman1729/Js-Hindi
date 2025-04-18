let score="33"; //string
let num= 33;

//  console.log(typeof(score)); //string 
//  console.log(typeof num);  //num

let valueInNumber=Number(score);  //string to number  actual value is this (NaN)
let valueInNumber2=score;
// console.log(typeof valueInNumber) //number;

// console.log(typeof valueInNumber2) // string hai

//"33" => 33
//"33abc"=> Nan
//true=>1 ; false => 0

let isLoggedIn=1;

let booleanIsLoggedin=Boolean(isLoggedIn); //
console.log(booleanIsLoggedin)
console.log(typeof booleanIsLoggedin) //boolean
//1 => true; false=>0
//" "=>false"
//"ayush"=> true

let someNumber =33

let stringNumber=String(someNumber)
//console.log(stringNumber);   //33 is now string 
//console.log(typeof stringNumber);


// *****************Operations/**************

let value=3;
let negValue= -value;

// console.log(negValue)
// console.log("1"+ 2); //12
// console.log(1+"2");  //12
// console.log("1"+2+2); //122

// console.log(3+ 2 + "2"); //52 num+string

// console.log(true +2) //3

// console.log(+true) //1

// let a=3;
// const b=a++;
// console.log(`a: ${a}, b: ${b}`);
//console.log(`x:${x}, y:${y}`);

// let x=4;
// const y=++x;
// console.log(`x: ${x}, y:${y}`);

let a=14;
const b=--a
console.log(`a:${a}, b:${b}`);

let x=41;
const y=x--
console.log(`x:${x}, y:${y}`);