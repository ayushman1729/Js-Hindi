//object literals
const mySym=Symbol("key1") //symbol ko object ka key mei add krke dikha do 

const JsUSer={
    name:"Hitsh",
    "full name": "hitesh chaudhary",  // console.log(JsUSer["full name"]); 
   [mySym]:"mykey1", //symbol h console.log(JsUSer[mySym]);
    ave:18,
    location:"lucknow",
    email:"hitesh@google.com",
    lastlogindays:["Monday","Saturday"]

 }

// console.log(JsUSer.email),
// console.log(JsUSer["email"]),
// console.log(JsUSer["full name"]),
// console.log(typeof JsUSer.mySym),
// console.log(JsUSer[mySym]); //symbol reprent to print

// JsUSer.email="hitesh@go000000000ogle.com"
// // Object.freeze(JsUSer)  //use for freeze 
// JsUSer.email="hitesh@microsoft.com"

// console.log(JsUSer);
JsUSer.greeting= function(){
    console.log(`HELLO JS USER`);   
}

JsUSer.greetingTwo= function(){
    console.log(`HELLO JS USER, ${this.name}`);   
}
console.log(JsUSer.greeting());
console.log(JsUSer.greetingTwo());

