// named higher order function
// named call back function
function higherOrderFunction(anotherFunction){
    console.log(anotherFunction);
}
function callBackFunction(){
    console.log("CallBackFunction and I will be called and executed after some times...");
}
higherOrderFunction(callBackFunction);