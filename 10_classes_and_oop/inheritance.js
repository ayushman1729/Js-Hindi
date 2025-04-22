class User {
    constructor(username) {
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
}
// Constructor ek special function hota hai jo object create hote waqt automatically call hota hai.

// Soch, jab tu const chai = new User("chai") likhta hai, tab constructor(username) automatically chal jaata hai aur this.username = username assign kar deta hai.

// class User {
//     constructor(username) {
//         this.username = username;
//     }
// }


//Inheritance ka matlab hota hai ek class dusri class ke features le leti hai. Jaise beta apne papa ki properties inherit karta hai.
class Teacher extends User {
    constructor(username,email,password) {
        super(username)
        this.email=email
        this.password=this.password

    }
    addCourse(){
        console.log("Course added");
    }
}

const chai=new Teacher("chai", "chai@google.com","123")

chai.logMe()

