//Dates

let myDate=new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate);  //object

let myCreatedDate= new Date(2023, 0 ,14)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate2= new Date(2023,0,1,5,3)
//onsole.log(myCreatedDate2.toLocaleString());

let myCreatedDate3= new Date("2023-01-11") //yy-month-date
// let myCreatedDate3= new Date("01-14-2023")
//console.log(myCreatedDate3.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);  //milisecond
// console.log(myCreatedDate3.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getMonth());
//console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long",
    
})