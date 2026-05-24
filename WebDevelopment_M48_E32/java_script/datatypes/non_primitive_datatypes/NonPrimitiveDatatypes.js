/*
non primitive datatypes
java script components which will return objects as return value

*/

// Number():number
// new Number():NumberObject
let classRoomNumber=Number(203);
console.log(classRoomNumber,typeof classRoomNumber);//203 'number'
let cgpaNumberObject=new Number(9.75);//boxing
let cgpaNumber=cgpaNumberObject.valueOf();//unboxing
console.log(cgpaNumberObject,typeof cgpaNumberObject);//Number{9.75} 'object'
console.log(cgpaNumber,typeof cgpaNumber);//9.75 'number'

// String():string
// new String():StringObject
let subjectName=String("WebDevelopment");
console.log(subjectName,typeof subjectName);//WebDevelopment string
let subjectNameStringObject=new String("JavaScript");//boxing
let subjectNameString=subjectNameStringObject.valueOf();//unboxing
console.log(subjectNameStringObject,typeof subjectNameStringObject);//String{'JavaScript'} 'object'
console.log(subjectNameString,typeof subjectNameString);//JavaScript string

// Boolean():boolean
// new Boolean():Boolean
let isUsernameValid=Boolean(true);
console.log(isUsernameValid,typeof isUsernameValid);//true 'boolean'
let booleanObject=new Boolean(true);//boxing
console.log(booleanObject,typeof booleanObject);//Boolean{true} 'object'
let booleanValue=booleanObject.valueOf();//unboxing
console.log(booleanValue,typeof booleanValue);//true 'boolean'

// BigInt():bigint(primitive value)
let bigIntValue=BigInt(687689698798698698698698698n);
console.log(bigIntValue,typeof bigIntValue);//687689698798698698698698698n 'bigint'

// Symbol():symbol(primitive value)
let symbolValue=Symbol("One");
console.log(symbolValue,typeof symbolValue);

// Array():ArrayObject
// new Array():ArrayObject
let arrayObject=[10,"Sai",true];
console.log(arrayObject,typeof arrayObject);

// java script objects
let student={
    name:"PawanKumar",
    age:25,
    designation:"Trainer"
}
console.log(student,typeof student);

// clarity
console.log(Number(10),typeof Number(10));//10 'number'
console.log(new Number(10),typeof new Number());//Number{10} 'object'
console.log(String("Java"),typeof String("Java"));//Java string
console.log(new String("Java"),typeof new String("Java"));//String{'Java'} 'object'
console.log(Boolean(true),typeof Boolean(true));//true 'boolean'
console.log(new Boolean(true),typeof new Boolean(true));//Boolean{true} 'object'
console.log(Array(10,"Sai",true),typeof Array(10,"Sai",true));//[10,"Sai",true] 'object'
console.log(new Array(10,"Sai",true),typeof new Array(10,"Sai",true));//[10,"Sai",true] 'object'
console.log({name:"SunilSir",age:35,designation:"ManagingDirector"},typeof {name:"SunilSir",age:35,designation:"ManagingDirector"});//{name:"SunilSir",age:35,designation:"ManagingDirector"} 'object'