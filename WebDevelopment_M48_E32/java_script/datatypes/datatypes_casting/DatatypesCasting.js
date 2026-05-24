// datatypes casting
// implicit datatype casting
let firstNumber=10;
let secondNumber="11";
console.log(firstNumber+secondNumber);//10+"11"="105"
console.log(firstNumber-secondNumber);//10-"11"=5
console.log(firstNumber<secondNumber);//true

// explicit datatype casting
// any datatype into number datatype
// Number(anyData):number
console.log(firstNumber+Number(secondNumber));//10+11=21
let isSunRiseEast=true;
console.log(Number(isSunRiseEast),typeof Number(isSunRiseEast));//1 'number'
let isSunRiseWest=false;
console.log(Number(isSunRiseWest),typeof Number(isSunRiseWest));//0 'number'
let rupees="100.75₹";
console.log(Number(rupees),typeof Number(rupees));//NaN 'number'

// parseInt(string):number
console.log(parseInt(rupees),typeof parseInt(rupees));//100 'number'
// parseFloat(string):number
console.log(parseFloat(rupees),typeof parseFloat(rupees));//100 'number'
console.log(parseInt(isSunRiseEast),typeof parseInt(isSunRiseEast));//NaN 'number'
console.log(parseInt(isSunRiseWest),typeof parseInt(isSunRiseWest));//NaN 'number'

// any datatype into String datatype
// String(anyData):string
// object.toString():string
console.log(String(firstNumber),typeof String(firstNumber));//10 string
let mobileNumber=9597170600;
console.log(String(mobileNumber),typeof String(mobileNumber));//9597170600 string
let isMobileNumberValid=false;
console.log(String(isMobileNumberValid),typeof String(isMobileNumberValid));//false string

console.log(firstNumber.toString(),typeof firstNumber.toString());//10 string
console.log(isMobileNumberValid.toString(),typeof isMobileNumberValid.toString());//false string

// any datatype into boolean datatype
// Boolean(anyData):boolean
let username="sai_kumar";
console.log(Boolean(username));