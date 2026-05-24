// function expression(IIFE)
(function (){
    console.log("IIFE executed by using AnonymousFunction.");
})();

// IIFE without parameters and without return value
(()=>{
    let givenNumber=10;
    let powerValue=5;
    let poweredValue=givenNumber**powerValue;
    console.log(`The powered value of given number '${givenNumber}' and power value '${powerValue}' : ${poweredValue}`);
})();

// IIFE with parameters and without return value
((givenNumber,powerValue)=>{
    let poweredValue=givenNumber**powerValue;
    console.log(`The powered value of given number '${givenNumber}' and power value '${powerValue}' : ${poweredValue}`);
})(10,3);

// IIFE with parameters and with return value
let poweredValue=((givenNumber,powerValue)=>{
    return `The powered value of given number '${givenNumber}' and power value '${powerValue}' : ${givenNumber**powerValue}`;
})(10,3);
document.getElementById("iife_return_value").textContent=poweredValue;