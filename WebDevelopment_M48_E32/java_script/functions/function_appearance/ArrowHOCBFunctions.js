// arrow higher order function
// arrow call back function
let arrowHigherOrderFunction=(anotherFunction)=>anotherFunction();
arrowHigherOrderFunction(()=>{
    console.log("CallBackFunction and I will be called and executed after some times...");
});