// function expression(arrow function)
let arrowFunction=()=>console.log("PrintingStatement");
for(let functionOperationCount=1;functionOperationCount<=10;functionOperationCount++){
    arrowFunction();
}

// arrow functions without paramters and without return value
let squareNumber=()=>{
    let givenNumber=5;
    let squaredValue=givenNumber*givenNumber;
    console.log(`The squared value of '${givenNumber}' : ${squaredValue}`);
}
squareNumber();

// arrow functions with paramters and without return value
let squareNumeric=givenNumber=>console.log(`The squared value of '${givenNumber}' : ${givenNumber*givenNumber}`);
squareNumeric(25);
let areaOfRectangle=(length,breadth)=>console.log(`The area of rectangle of '${length}' and '${breadth}' : ${length*breadth}cm^2`);
areaOfRectangle(25,15);

// arrow functions with paramters and with return value
let arrowFunctionReturnValue=document.getElementById("arrow_function_return_value");
let arrowFunctionOperationalCode=document.getElementById("arrow_function_operational_code");
let square=givenNumber=>{return `The squared value of '${givenNumber}' : ${givenNumber*givenNumber}`};
arrowFunctionReturnValue.textContent=square(625);
arrowFunctionOperationalCode.innerText=square;