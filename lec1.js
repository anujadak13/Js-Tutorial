
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object Litarals (basically a object and using of that object)
const user= {
    username: "Anuj Kumar",
    email: "adakdhuriya3@gmail.com",
    city: "Mahoba",

    getuserdata: function(){
        console.log(`Username is ${this.username} and email is ${this.email}`)
        // here 'this' keyword is refering to current context , mtlb current object.

        console.log(this)// so here this is refering to whole currrent object.
    }
}

console.log(user.getuserdata())
console.log(this)// here 'this' will refer to empty object because we are accessing 'this' inside the node environment.
// but when we cdo console.log(this) inside the browser it will give the window object that have so many properties.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Constructor Fuction---

function Userdata(username, userid, usercity){
    this.usename=username,
    this.userid= userid,
    this.usercity=usercity
    return this
}

//const userone= Userdata("absc", "1234", "mm")// when we are calling this userfunction so its basically creating 
// the object but its overriding aur objects.
// to avoid this problem we have to use "new" keyword so basically using of it we will be able to craete a new mulitple objects

//const usertwo= Userdata("dkxnb", "1434", "mn")
const user_one= new Userdata("absc", "1234", "mm")
const user_two= new Userdata("absc", "1234", "mm")
const user_three= new Userdata("absc", "1234", "mm")

console.log(user_one)
console.log(user_two)
console.log(user_three)

// SOME WORKING STEPS FOR "new" KEYWORD
//1-"new" keyword ka use karke ek naya object create hota hai.
//2- "new" keyword ki wajeh se -Constructor function call hota hai.
//3- toh ye kaam kaise karta hai , jitne bhi arguments hai usko object mein pack karta hai.
//4- "ths" keyword ki help se saare arguments inject ho  jaate hai.
//5- return this karne se object mil jata hai.(return this optional hai)