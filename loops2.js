
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// when we use foreach loop so we are not able to apply any conditions on it.
// so in place of foreach loop we will use filter method. 
const myarr=[1,2,3,4,5,6,7,8,9]

const ans= myarr.filter((num)=>{  // using for filter we can store the o/p and after the execution of that we can use it.
    return num > 5
})

console.log(ans)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// we can use foreach loop also for the same above example

const arr_ans=[]
 myarr.forEach((num)=>{ // using for filter we can store the o/p and after the execution of that we can use it.
    if(num>5) arr_ans.push(num)
})

console.log(arr_ans)

// More on filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const output= books.filter( (bk)=>{
  return bk.genre==='Non-Fiction'
  })
  console.log(output)


  const temp_ans= books.filter( (bk)=>{
    return (bk.genre==='Non-Fiction') && (bk.publish < 1995)
    })
console.log(temp_ans)

// Using of map()
// using of map we can easily perform any operations and map returns the array so we can store our o/p 
// and use it.
num_array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const map_ans= num_array.map( (num)=>{
return num*10
})

console.log(map_ans)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// map() chaining 

const map_chain= num_array
                         .map( (num)=> num*1000 ) // first chain here we performed aoperation but did't return any value
                         // so the new array will work for the second chaining./
                         .map( (num)=> num/10)// same operations will performed here and the new array will work for the next chain
                         .filter((num)=>{return num>500} ) // here we are returning values of o/p .

               console.log(map_chain)          // and printing them here.




 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // +++++++++Reduce++++++++++
 const num=[1,2,3,4,5,6,7,8,9]
// reduce work same as a map or filter the main diff is its  give the two value-
// accumulate and current value and initially we set the current value anything.
 let num_ans= num.reduce(function add(acc, val){ 
    return acc + val 
 },0)              
console.log(num_ans)

////////////////////////////////////////////////////////////////////
num_ans= num.reduce( (acc, val)=>{
  return acc+val
},10)
console.log(num_ans)