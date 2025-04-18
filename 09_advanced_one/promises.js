const promisesOne=new Promise(function (resolve,reject){
    setTimeout(function (){
     console.log('async task is completed');
     resolve()
    },1000)
})

promisesOne.then(function (){
    console.log('promise is resolved');
})

new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Async tasj 2 is completed");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 is resolved")
})

const promiseThree= new Promise(function (resolve,reject){
    setTimeout(function(){
       resolve({username: "chai", email:"chai@example.com"}) 
    },1000)
})

promiseThree.then(function(user){
console.log(user);

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
     let error=false
     if(!error) {
        resolve({username:"hitesh", password:"1234"})
     }
     else {
        reject('ERROR: something went wrong')
     }
    },1000)
})

promiseFour
.then((user)=> {
    console.log(user);
    return user.username
})
.then((username)=> {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally( ()=> {
    console.log('finally block is executed');
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:"Javascript", password:"1234"})
        }else {
            reject('ERROR:JS went wrong')
        }
    }, 1000);
});

async function consumePromiseFive(){
   try {
    const user= await promiseFive
    console.log(user);
   } catch(error){
    console.log(error);
   }
}
consumePromiseFive() 