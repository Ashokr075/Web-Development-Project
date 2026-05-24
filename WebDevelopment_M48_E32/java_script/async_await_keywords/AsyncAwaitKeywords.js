// async and await keywords
async function exampleFunction(){
    // shorthand approach of making any promise object to be settled.
    return Promise.resolve("PromiseObjectResolved");
}
console.log(exampleFunction());

function returnsPromiseOneObject(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // asynchronous operations
            let isPromiseOneObjectCreated=true;
            if(isPromiseOneObjectCreated){
                resolve("PromiseOneObjectCreated.");
            }
            else{
                reject("PromiseOneObject have not created.");
            }
        },3000);
    });
}
function returnsPromiseTwoObject(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // asynchronous operations
            let isPromiseTwoObjectCreated=true;
            if(isPromiseTwoObjectCreated){
                resolve("PromiseTwoObjectCreated.");
            }
            else{
                reject("PromiseTwoObject have not created.");
            }
        },5000);
    });
}
function returnsPromiseThreeObject(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // asynchronous operations
            let isPromiseThreeObjectCreated=true;
            if(isPromiseThreeObjectCreated){
                resolve("PromiseThreeObjectCreated.");
            }
            else{
                reject("PromiseThreeObject have not created.");
            }
        },10000);
    });
}
function processPromiseObjects(){
    console.log("PromiseObject processing starts...");
    returnsPromiseOneObject()
    .then((promiseResult)=>{
        console.log(promiseResult);
    })
    .catch((promiseResult)=>{
        console.log(promiseResult);
    });
    returnsPromiseTwoObject()
    .then((promiseResult)=>{
        console.log(promiseResult);
    })
    .catch((promiseResult)=>{
        console.log(promiseResult);
    });
    returnsPromiseThreeObject()
    .then((promiseResult)=>{
        console.log(promiseResult);
    })
    .catch((promiseResult)=>{
        console.log(promiseResult);
    });
    console.log("PromiseObject processing ends.");
}
// processPromiseObjects();

async function handlePromiseObjects(){
    console.log("PromiseObject handling starts...");
    let promiseResultThree=await returnsPromiseThreeObject();
    console.log(promiseResultThree);
    let promiseResultTwo=await returnsPromiseTwoObject();
    console.log(promiseResultTwo);
    let promiseResultOne=await returnsPromiseOneObject();
    console.log(promiseResultOne);
    console.log("PromiseObject handling ends.");
}
handlePromiseObjects();
function printHelloWorld(){
    console.log("HelloWorld.!!");
}
printHelloWorld();