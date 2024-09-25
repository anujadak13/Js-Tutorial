// Promises are basically objects which have 3 states-
// 1- Pending
//2- Resolves or fullfill
//3- Recjected

const promise1= new Promise(function(resolve, reject){ // this is way to creat promise and store a promise
    setTimeout(function(){
    console.log('first promise task completed')
     resolve() // resolve() is connected with then() so basically resolve will call to then()
    } ,1000)
    //resolve()
})

promise1.then(function(){  // here we are cosumising promise after creating promise1 and telling promise1 is completed or not.
    console.log('first promise resolved')
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// A diff way to create a promise basically here we will not store promise directly create and consume.

new Promise(function(resolve, reject){ // this is way to creat promise and store a promise
    setTimeout(function(){
    console.log('second promise task completed')
     resolve() // resolve() is connected with then() so basically resolve will call to then()
    } ,1000)
}).then(function(){  // here we are cosumising promise after creating promise1 and telling promise1 is completed or not.
    console.log('second promise resolved')
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// We can send back the value as well from resolve.
// Resolve most of the time will send the data into object form and we can consume the promise basically 
// using of .then() we can show the data at o/p.

new Promise(function(resolve, reject){ 
    setTimeout(function(){
    console.log('third promise task completed')
     resolve({username: "anuj kumar", usermail: "adakdhuriya3@gmail.com"}) 
    } ,1000)

}).then(function(user){  
    console.log(`third promise user name is ${user.username} and mailid is ${user.usermail}`)
})


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//How we handle errors in promises

const promise4= new Promise(function(resolve, reject){ 
    setTimeout(function(){
        let error=false
        if(!error){
            console.log('promise fourth task completed')
            resolve({username: "anuj kumar", usermail: "adakdhuriya3@gmail.com"}) 
        }
        else {
           console.log("Error generated")
           reject("ERROR: Somthing went wrong") // when we got the error from our task so reject will 
           // throug the error and using of catch we will print the error when we consume the promise.
        }
        }, 1000)


})
promise4
   .then(function(user){  
    console.log(`fourth promise user name is ${user.username} and mailid is ${user.usermail}`)
})
   .catch(function(error){ // Here we are catching the error and printing back .
    console.log(error)
})
   .finally(function(){
    console.log("ye to hamesha print hoga hi hoga, its shows us that our promise is fullfilled or rejected")
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Promises using Asyc , Await

const promise5= new Promise(function(resolve, reject){ 
    setTimeout(function(){
        let error=false
        if(!error){
            console.log('promise five task completed')
            resolve({username: "anuj kumar", usermail: "adakdhuriya3@gmail.com"}) 
        }
        else {
           console.log("Error generated")
           reject("ERROR: Somthing went wrong") // when we got the error from our task so reject will 
           // throug the error and using of catch we will print the error when we consume the promise.
        }
        }, 1000)
    })
async function promise_consume() {
    try {
        const result= await promise5
        console.log(result)
    } catch (error) {
        console.log(error)
    }

}

promise_consume()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//More on async await and try catch

async function getuserdata(){
    try {
        const respose= await fetch('https://www.youtube.com/')
        const result= await respose.json()
        console.log(result)
    } catch (error) {
        console.log('Error: Somthing went wrong')
    }
}

getuserdata()
        
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
//fetch with then() and catch()

fetch('some-url-here')
.then(function(response){
    console.log(response)
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log("error generated")
})
        
