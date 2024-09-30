class User{
    constructor(username, id){
        this.username=username
        this.id=id
    }

    logMe(){
        console.log(`Welcome ${this.username}`)
    }
   static Unique_id(){ // when we use "static" key word before any method so we will not be able to access it.
    // In this example we are not able to access user1.Unique_id. We are getting error.
    
        console.log(`Your Unique_id is ${this.id}`)
    }
}

const user1= new User("anuj", "13")
user1.logMe();
user1.Unique_id()