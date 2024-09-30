class User {
    constructor(username){
    this.username=username
    }

    logMe(){
        console.log(`Now you are loggedin ${this.username}`)
    }
}

class Teacher extends User{ // here we are doing inheritance
  constructor(username, email, password){
    super(username) // so basically we have to use "super" keyword for doing our task from super class.
    //previously we were doing this work using of "call" but using of class we have to use "super" key.
    this.email=email
    this.password=password
  }

  New_course(){
    console.log(`Welcome to new course ${this.username}`)
  }
}

const user1= new User("anuj")
console.log(user1)
console.log(user1.logMe())

const user2= new Teacher("anuj", "adakdhuriya3@gmail.com", "1234")
console.log(user2)
console.log(user2.New_course())

console.log(user2.logMe())