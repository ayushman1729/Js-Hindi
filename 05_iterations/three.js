//for of 

//["", "", ""]
// [{}, {}, {}

const arr=[1,2,3,4,5]

for (const num of arr) {
  //  console.log(num);   
}

const greetings="Hello world!"
for (const element of greetings) {
   // console.log(`Each char is ${element}`);
    
}

//Maps
const map=new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")

//console.log(map);

// for (const element of map) {
//     console.log(element); 
// }

for (const [key,value] of map) {
    console.log(key,':-', value);
    
}

const myObject = {
    game1:'NFS',
    game2:'spiderman'

}

for (const [key,value] of myObject) {
    console.log(key, ':-', value);
    
}