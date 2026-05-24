// anonymous higher order function
// anonymous call back function
let anonymousHigherOrderFunction=function (anotherFunction){
    anotherFunction();
}
anonymousHigherOrderFunction(function (){
    console.log("CallBackFunction and I will be called and executed after some times...");
});
