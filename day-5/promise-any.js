const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Failure1');
const p3 = Promise.reject('Failure2');


Promise.any([p1,p2,p3])
.then((results)=>{
     console.log(results);


    })
    .catch((error)=>{
        console.error('error was caught');
        
    })
    
