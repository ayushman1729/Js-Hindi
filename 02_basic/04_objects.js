// const tinderuser= new Object()  //singleton object

const tinderUser= {}   //non single ton object

tinderUser.id= "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser); //all values print

// console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));  //[ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser)); //sbko array mei bana deta h [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser);

const regularUser = {
    email : "some@google.com",
  fullname: {
    userfullname: {
      firstname:"ayushman",
      lastname:"singh"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
      id: 1,
      email: "h1@gmail.com"
  },
  {
      id: 1,
      email: "h2@gmail.com"
  },
  {
      id: 1,
      email: "h3@gmail.com"
  },
]


// console.log(users[0].email);

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //ye property h ya nhi 
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
