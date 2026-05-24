/*
primitive datatypes
java script components which will return primitive values as return value
*/
// typeof:string(""|'') 
// number
let classRoomNumber=203;
console.log(classRoomNumber,typeof classRoomNumber);
const cgpa=9.75;
console.log(cgpa,typeof cgpa);//9.75 'number'
// string
let laptopBrandName="hp";
console.log(laptopBrandName,typeof laptopBrandName);//hp string
let bagBrandName='WildCraft';
console.log(bagBrandName,typeof bagBrandName);//hp string
// boolean
let isUsernameValid=true;
console.log(isUsernameValid,typeof isUsernameValid);//true 'boolean'
// undefined
let gameScore;
let quantityValue;
console.log(gameScore,typeof gameScore);// undefined
console.log(quantityValue,typeof quantityValue);// undefined
// null
let username=null;
let password=null;
console.log(username,typeof username);// null 'object'
console.log(password,typeof password);// null 'object'
// bigint
let gPayTransactionID=98797986897687668976n;
let phonePeTransactionID=BigInt(98797986897687668796n);
console.log(gPayTransactionID,typeof gPayTransactionID);// 98797986897687668976n 'bigint'
console.log(phonePeTransactionID,typeof phonePeTransactionID);// 98797986897687668976n 'bigint'
// symbol
let objectOne=Symbol("ObjectOne");
let objectTwo=Symbol("ObjectOne");
console.log(objectOne, typeof objectOne);// Symbol(ObjectOne) 'symbol'
console.log(objectTwo, typeof objectTwo);// Symbol(ObjectTwo) 'symbol'

// clarity
console.log(10==10);
console.log("Web"=='Web');
console.log(true==false);
console.log(undefined==null);
console.log(typeof undefined==typeof null);
console.log(gPayTransactionID==phonePeTransactionID);
console.log(objectOne==objectTwo);
console.log(5,typeof typeof typeof typeof typeof 5);//5 string