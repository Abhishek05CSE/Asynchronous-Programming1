Promise.all([promise1,promise2,...])
.then((results)=>{
    //Result is an array of resolved values
})
.catch(error)=>{
    //Error from the first rejected
}
const