//Error propogation

// const fetchdata = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const data= { id:1,name:'john'};
//         resolve(data);
     
// },1000);
// });
// fetchdata
// .then((data)=>{
//     console.log('data recieved',data);
//     return data.id;

    
// })
// .then((id)=>{
//     console.log('ID:',id);
    
// })
// .catch((error)=>{
//     console.error('Error',error);
    
// });     
   

//CHAINING PROMISES

function fetchUser(userId){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({ userId,username:'john-doe'});
        },1000);
    })
}
function fetchPosts(username){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(['Post 1','Post 2']);
        },1000);
    });
}
fetchUser(1)
.then((user)=>{
    console.log('Posts:',Posts);
    
})
.catch((error)=>{
    console.log('Error:',error);
    
});


