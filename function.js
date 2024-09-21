//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// rest operator-> when we pass more values as a arguments and recieve by only one parameter 
// then we use ... rest operator.
// its return our all values in array.

function takinginput(...num){
return num;
}

console.log(takinginput(200,499,5000,387))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function takingarrays(anyarray){
    return anyarray[3]
    }

    const array=[1,2,3,4,5,6,7,8,9]
    console.log(takingarrays(array))

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    function takingobjects(anyobject){
        console.log(anyobject.name)
        console.log(anyobject.mail)
        }
takingobjects({name:"anuj", mail:"abcd"})