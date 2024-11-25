//Primitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score=100
const scoreValue=100.2

// console.log(typeof scoreValue)

const isLoggedIn=false
const outsideTemp=null  //object
let userEmail;  //undefined

// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);

 const id=Symbol('123')
 const anotherId=Symbol('123')

// console.log(id=== anotherId)  //false

// const bigNumber=3447343274238439343n
// console.log(typeof bigNumber)



//***********************Refrence/NON-Primitve**********************

//Array, objects, Functions

const heros=["shaktiman", "naagraj", "doga"]  //array=> object
 let myObj={
    name:"ayushman",
    age:"19,"
 }

const myfunction = function(){ // =>function
 console.log("Hello world");

}
console.log(typeof myfunction)