function sayMyName() {
  console.log("H");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}

//sayMyName()

// function addTwoNumbers(number1, number2) { //num1, num2 is parameter
//     console.log(number1 + number2);

// }

// addTwoNumbers(3,"4") //34
// addTwoNumbers(3,null) //3  //null is argument

const result1= addTwoNumbers(3,5)
//console.log("Result : "+ result1);  // undefined

function addTwoNumbers(number1, number2) {
  // let result= number1 + number2
  // return result
  return number1 + number2;
}

function addtwonumbers (num1, num2) {
return num1+ num2
}
const result = addTwoNumbers(3, 5);
//console.log("Result : " + result);

function loginUserMessage(username = "sam") {
  if (!username) {
  //  console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
username: "hitesh",
price:199
}

function handleObject(anyobject) {
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

handleObject( {
  username:"sam",
  price:399
})

const myNewArray= [200,400,500,600]

function returnSecondValue(getArray) {
return getArray[1]
}

console.log(returnSecondValue(myNewArray));
