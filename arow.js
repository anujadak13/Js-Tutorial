

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Using of this inside the objects
const object={
    username: "adakdhuriya3@gmail.com",
    lastname: "kumar",
    city: "mahoba",
    emailfun: function email(){
        console.log(`your email is ${this.username}`) // here this is refering to present context.
        console.log(this)
    }
}

object.emailfun()
object.username="abcdefg"
object.emailfun()
console.log(this) // here this will print empty object because here this is not refering to any object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// using of this inside the functions

const chai=function chaipecharcha(){
    console.log(this)// here this will print so many things 
    const username="anuj"
    console.log(this.username)// this will print undefined because this doest not work in functions
}
chai()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Arrow functions

const sum= (num1, num2) => {
    console.log(this) // "this" will print empty objects here
return num1+num2
}

console.log(sum(19273, 87273))

// we can right arrow functions like-

const arrow= (num1, num2) => (num1+num2)

console.log(arrow(10,30))