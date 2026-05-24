// function declaration(named function)
function toPrintStatement(){
    // assignable operational code.
    console.log("PrintingStatement");
}
toPrintStatement();

// named function without parameters and without return value
function productTwoValues(){
    let firstNumber=10;
    let secondNumber=20;
    let productValue=firstNumber*secondNumber;
    console.log(`The product of '${firstNumber}' and '${secondNumber}' : ${productValue}`);
}
productTwoValues();

// named function with parameters and without return value
function multiplyTwoNumbers(firstNumber,secondNumber){
    let multipliedValue=firstNumber*secondNumber;
    console.log(`The product of '${firstNumber}' and '${secondNumber}' : ${multipliedValue}`);
}
multiplyTwoNumbers(20,30);
multiplyTwoNumbers(30,40);
multiplyTwoNumbers(40,50);

// named function with parameters and with return value
function multiplyThreeNumbers(firstNumber,secondNumber,thirdNumber){
    let multipliedValue=firstNumber*secondNumber*thirdNumber;
    return `The product of '${firstNumber}' and '${secondNumber}' and '${thirdNumber}' : ${multipliedValue}`;
}
console.log(multiplyThreeNumbers(10,20,30));
console.log(multiplyThreeNumbers);
document.getElementById("named_function_return_value").textContent=multiplyThreeNumbers(30,60,90);
document.getElementById("named_function_operational_code").innerText=multiplyThreeNumbers;