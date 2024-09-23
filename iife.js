//++++++++++++++++++++++++++++++++++++++++++++++++++++
//Named iife
(function add(){
    console.log("DB added successfully")
}) ();// when we call two iife one after another then we have to stop one iife after execution other wise it will through error
// Note: When we want to run our function immediately and keep protect from global varibles then  we use iife


// iife with arrow functions (unamed iife)
( ()=>{
    console.log("function called")
}) ()
