//for

for (let index = 0; index <= 10; index++) {
    const element =index;

   // console.log(element);
    if(element==5) {
      //  console.log("5 is best number");
        
    }
}

for(let i=1; i<=10; i++) {
  // console.log(`Outer loop value : ${i}`);

 for(let j=1; j<=10; j++) {
// console.log(`Inner loop value ${j} and inner loop is ${i}`);
 //console.log(i+"*" + j + "="+ i*j);
 
 }   
}

let myArray= ["flash", "batman", "superman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
 //   console.log(element);
    
}
//break and continue

for (let index = 1; index < 20; index++) {
    if(index==5){
 // console.log(`Detected 5`)
  break
    }
 //   console.log(`Value of i is ${index}`);
    
}

for(let i=1; i<=8; i++) {
    if(i==5) {
        console.log("detected 5 ");
        continue
    }
    console.log(`value of i is ${i}`);
    
}
