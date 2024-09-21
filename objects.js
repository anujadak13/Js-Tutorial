

const mysym= Symbol("symbol") // creating a symbol datatype here and storing that in object as a key

const jsuser={  // declaretion of objects
    name: "anuj",
    "full name" : "anuj kumar",
    age: 25,
    [mysym]: "mykey", // we have to add this way 
    city: "mahoba",
    isobject: false,
    tack: ["monday", "wed", "fri"]
}
 console.log(jsuser.name) // accessing the name of object
 console.log(jsuser["name"]) // diff way to access of property
 console.log(jsuser["full name"]) 

console.log(typeof jsuser[mysym])

jsuser.city="pune" // we can override any value 
console.log(jsuser.city)

//Object.freeze(jsuser) // when we freeze our object we can update the value after it.

console.log(jsuser)

jsuser.greeting= function(){
    console.log("hello js user")
}

jsuser.greeting1= function(){
    console.log(`hello js users ,${this["full name"]}, ${this.city}`)
}
 
console.log(jsuser.greeting())
console.log(jsuser.greeting1())

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//singalton onject
const object=new Object();
console.log(object)

// here we can define the value of objects --
object.name="anuj"
object.age=25
object.city="mahoba"
object.email="adakdhuriya3@gmail.com"

console.log(object)

//+++++++++++++++++++++++++++++++++++++++++++++++++=
//Nested objects
const nes_object={
    userenail: "something",
    userpass:"something",
    user_sec:{
        name:"something",
        add:{
            pata:"mahoba"
        }
    }
}
console.log(nes_object.user_sec.add.pata)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Merge objects
//merging objects is same as merging arrays 

const obj1={1:"a", 2:"b", 3:"c"}
const obj2={4:"d", 5:"e", 6:"f"}
 const obj=Object.assign({}, obj1, obj2) // we are passing {} empty object its optional.

 console.log(obj)


 // We will use this methods more same as arrays-

const ans_obj={...obj1, ...obj2} // spread method
console.log(ans_obj)   

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//When we have array of objects so we can print like this-
const array=[{1:"a", 2:"b", 3:"c"}, {1:"a", 2:"b", 3:"c"}, {1:"a", 2:"b", 3:"c"}, {1:"a", 2:"b", 3:"c"}]
console.log(array[1][2]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//We can get the all the keys and value of any peticular object-
// its return the array so we can store that array and perform any operation to it
console.log(Object.keys(obj1))
console.log(Object.values(obj1))

// If we want to search any perticular property in object like its exist or not so we can use-

console.log(obj.hasOwnProperty('3'))
console.log(nes_object.hasOwnProperty('userpass'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object destructuring
const destructure ={
    name: "anuj kumar",
    mob: 9359457703,
    city: "mahoba",
    email: "adakdhuriya3@gmail.com"
}

const {email}=destructure // one way to destructure any propety
console.log(email)

const {email: mailid}=destructure
console.log(mailid)