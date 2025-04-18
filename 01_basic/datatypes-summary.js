//Primitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score=100 //number
const scoreValue=100.2

console.log(typeof scoreValue);


const isLoggedIn=false   //boolean is true/false
const outsideTemp=null  //object
let userEmail;  //undefined

// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
//console.log(typeof userEmail);

 const id=Symbol('123') //symbol is symbol
 const anotherId=Symbol('123')

 //console.log(typeof id);
 
console.log(id=== anotherId)  //false

// const bigNumber=3447343274238439343n
// console.log(typeof bigNumber)



//***********************Refrence/NON-Primitve**********************

//Array, objects, Functions

const heros=["shaktiman", "naagraj", "doga"]  //array=> object
 let myObj={
    name:"ayushman",
    age:"19,"
 }
console.log(typeof myObj);//object

const myfunction = function(){ // =>function
 console.log("Hello world");

}
console.log(typeof myfunction)

//********** */

//         Stack Memory(Primitive),        Heap Memory(Non- Primitive)

//stack*** kaha use hota h ? =>Primitve mei use hota hai 
//=> variable jo declare kiya h uska copy milta h hmko


//Heap        ***** non- primitive mei heap
//isme reference milta h original value ka, jo bhi change karaga original value mie change  hoga