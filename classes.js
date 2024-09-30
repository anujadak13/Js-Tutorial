//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Creating Objects using Classes

class object {
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }
// defining methods to chaing our passwprd
    password_encript(){
        return `${this.password}abcd`
    }
    // defining methods to changing our username
    change_username(){
        return `${this.username.toUpperCase()}`
    }
}

const user= new object("anuj", "adakdhuriya3@gmail.com", "1234")

console.log(user)
console.log(user.password_encript())
console.log(user.change_username())


// // Behind the scene

function object1(username, email, password){
    this.username=username
    this.email=email
    this.password=password

    object1.prototype.change_username=function(){
        return `${this.username.toUpperCase()}`
    }

    object1.prototype.change_email=function(){
        return `${this.email="anujdhuriya@gmail.com"}`
    }
}

const User= new object1("anuj", "adakdhuriya3@gmail.com", "1234")

console.log(User)
console.log(User.change_email())
 console.log(User.change_username())

