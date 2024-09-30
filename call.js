
function Setuser_name(username){
    this.username=username
    return username
}

function Createuser(username, email, password){
    Setuser_name.call(this, username)// when we call this function to do our task, we are giving it reference to that function
    // we are not calling it.
    // so we have use here ".call" so when this internal function call it, it will do our task but we have to 
    //do some more work because after execution of that iinternal function all the variables will be destroyed
    // so we have to use "this" keyword also for executing it properly.
    this.email=email
    this.password= password
}

const user=new Createuser("anuj", "adakdhuriya3@gmail.com", "1234")
console.log(user)