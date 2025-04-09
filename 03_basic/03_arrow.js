const user = {
    username: "hitesh",
    price:999,

    welcomeMessage: function() {
    //    console.log(`${this.username}, welcome to website`);
      //  console.log(this); //current value ki baat krta h 
        
    }
}

// user.welcomeMessage()
// user.username = "ayush"
// user.welcomeMessage()

console.log(this); // {} empty 

// function chai() {
//     let username= "hitesh"
//     console.log(this.username); //undefined object ka ander  hi kaam kr rha h function ka ander kaam nhi kr pa rha hai
 
// }

// chai()

// const chai = function() {
//     let username="hitesh"
//     console.log(this.username); //undefind
   
// }
// chai()

const chai = () => {
    let username="hitesh"
    //console.log(this.username)
    
}

// chai()

// const addTwo =(num1, num2) => {
//     return num1+ num2
// }
// console.log(addTwo(3,4));

// const addTwo =(num1, num2) =>  num1+ num2
// const addTwo =(num1, num2) => (num1+ num2)

const addTwo =(num1, num2) => ({username : "hitesh"})

console.log(addTwo(3,4));
