const mydate= new Date();
console.log(mydate) 
//--> when we print the date we got the o/p but its not readable.

console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toString())
console.log(mydate.toTimeString())
console.log(mydate.toUTCString())
// these all are the methods to get date 

let time= Date.now();
console.log(time)// here we are getting time in ms

// to convert ms to sec we will do-
console.log(Math.floor(time/1000))


