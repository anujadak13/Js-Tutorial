// prototype in functions

function Createuser(username, user_id, price){
    this.usename=username
    this.user_id=user_id
    this.price=price
}
// so basically when we write our function we can define the values using this keyword and we can also add some
// functions or methos to this using prototype.
Createuser.prototype.increasevalue= function(){
   this.price++;
}
// here i have implemented a "increase value function and i am accessing it using "this" keyword.

Createuser.prototype.printme= function(){
    console.log(`printing the function object value ${this.price}`)
 }
// same here i have implemented a "printme" function and i am accessing it using "this" keyword.
 const user1= new Createuser("anuj", 1, 20)
 const user2=  new Createuser("chai_aur_code", 2, 200)

 // Note-> when run it so it will be unable to read it so basically we have to use "new"
 //keyword to create new object.
 user1.printme()
 console.log(user1)