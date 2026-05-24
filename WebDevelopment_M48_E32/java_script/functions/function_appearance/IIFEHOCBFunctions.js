// IIFE higher order function
// IIFE call back function
(function (){
    let arrowHigherOrderFunction=(anotherFunction)=>anotherFunction();
    arrowHigherOrderFunction(()=>console.log("CallBackFunction and I will be called and executed after some times..."));
})();