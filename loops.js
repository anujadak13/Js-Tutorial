const myobject={
    name: "anuj",
    city: "mahoba",
    language: "javascript"
}
// we use for in loop to traverse in js
for (const key in myobject) {
    console.log(`${key} is ${myobject[key]}`)
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//FoorEach loop

const arr=["cpp", "js", "java", "python", "ruby", "php"]
arr.forEach(function (val){ // for each loop takes a call back function with a variable to print the values. 
    console.log(`arr value is ${val}`)
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // other way to use foreach loop
 function print(val){
    console.log(`arr value is ${val}`)
 }

 arr.forEach(print)

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // in for each loop parameter have some more proterties like- value , index and the whole array

 arr.forEach((val, ind, myarr)=>{ // for each loop takes a call back function with a variable to print the values. 
    console.log(`arr value is ${val}, index is ${ind} and the whole array is${myarr}`)
})
// so here we are printing array value, array index and the whole array.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//When we have array of objects and we want to traverse in that array and get the values of that object
const arrobject= [
    {
        name:"cpp",
        topic:"oops"

    },
    {
        name:"java",
        topic:"oops"

    },
    {
        name:"python",
        topic:"oops"

    }
]

arrobject.forEach((item)=>{
console.log(`language name is ${item.name} and main topic is ${item.topic}`)
})