//arrays

const myArr=[0, 1, 2, 3, 4, 5]
const myHeros=["shaktiman", "naagraj"]

const myArr2=new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//JavaScript array-copy operations create shallow copies. like heap
//deep copy is like stack give refreal

//*********         Array method     */

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


myArr.unshift(9) //aaga print ho jata h
// myArr.shift()  //aaga ka remove ho jata h 

// console.log(myArr);

// console.log(myArr.includes(9)); //check 9 is exit or not given only boolean 
// console.log(myArr.indexOf(8));  //return where is it give location

const newArr=myArr.join()  //arrays change into string 
// console.log(myArr); //they give array value 
// console.log(newArr);//  //typeof newArr is showing string


// **********Slice, Splice

// console.log("A", myArr);

const myn1=myArr.slice(1,3) //in slice last index not print

// console.log(myn1);
// console.log("B", myArr);

//**splice */
// console.log("A", myArr);

const myn2=myArr.splice(1,3) //in spice last index print and also the main things is original aaray is change they remove that that splice part

// console.log(myn1);
// console.log("B", myArr);
