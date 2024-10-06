const p1= new Promise((resolve)=>setTimeout(resolve,500,'first'));
const p2= new Promise((resolve)=>setTimeout(resolve,100,'second'));

Promise.race([p1,p2])
.then((value)=>{
    console.log(value);
    
})
.catch((error)=>{
    console.error('Error:',error);
    
});