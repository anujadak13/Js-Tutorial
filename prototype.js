//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Adding additional methods using Object Prototype

let myHeros=["Virat", "Dhoni", "Rohit"]

let Heros_power ={
    Virat: "Batting",
    Dhoni: "keeper",

    get_power: function(){
        console.log(`power is ${this.Virat}`)
    }
}
 Object.prototype.anuj=function(){ // here we can add any methods in aur Object and it can be accessble for all.
    console.log(`anuj power present in all objects`)
 }
 console.log(Heros_power)
 Heros_power.anuj()// we can able to access the "anuj" methods here which be declayred above.
 myHeros.anuj()// we can able to access the "anuj" methods here which be declayred above.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creatig a method which will be present in all the string which will give us true length of string

let string1= "chaiaurcide         "

String.prototype.trulength= function(){ // so here we are implementing the trulength method for string
    //so any string can use this methood.
    console.log(`true length is ${this.trim().length}`)
}

string1.trulength();
"anujkumar       ".trulength()


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// INHERITANCE

let person1={
    name:"anuj",
    hobby: "instascroll"
}

let person2={
    name: "abcd",
    hobby: "cricket"
}
// Modern syntax for Inheritance
Object.setPrototypeOf(person2,person1)
console.log(person2)




