const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //flash print

const allHeros= marvel_heros.concat(dc_heros)
//console.log(allHeros);  // now they combine all arrays

const all_new_heros=[...marvel_heros, ...dc_heros]
//console.log(all_new_heros);  //better then concat

const another_array=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

const real_another_array=another_array.flat(Infinity) // ya hm isko 2,3,4 bhi kr skta h a/q to array
//console.log(real_another_array);

// console.log(Array.isArray("Ayushman")) //this is not array so o/p is false
// console.log(Array.from("Ayushman"));  //this change into array

//console.log(Array.from({name:"ayushman"})); //***intersting ***becoz o/p is []directly convert nhi kar paa rha hai isko batana paraga ya key ka array banyu ya sirf iska value ka aray banyu

let score1=100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3));
