// string objects
// string literals("" | ''):string
let subjectName="Ja'v'a";//implicit boxing
let courseName='Core"J"ava';
console.log(subjectName,typeof subjectName);//Java string
console.log(courseName,typeof courseName);//CoreJava string

// String(anyData):string
let bagBrandName=String("WildCraft");
let laptopBrandName=String('hp');
console.log(bagBrandName,typeof bagBrandName);//WildCraft string
console.log(laptopBrandName,typeof laptopBrandName);//hp string

// new String(anyData):String
let shoeBrandName=new String("Bata");//explicit boxing
console.log(shoeBrandName,typeof shoeBrandName);

// template literals(`string`):string
let purposeOfWebDevelopment=`WebDevelopment is the process of "designing" and 'developing' front-end of the webpages,
by using WebTechnologies...`;
console.log(purposeOfWebDevelopment,typeof purposeOfWebDevelopment);

// to validate whether number is positive or negative and print the output in normal string concatenation operator
let givenNumber=-10;
if(givenNumber>0){
    console.log("The given number '"+givenNumber+"' is positive");
}
else{
    console.log("The given number '"+givenNumber+"' is negative");
}

// string interpolation(${variableName | ConstructorName | functionName | propertyName})
let number=-15;
if(number%3==0 && number%5==0 && number>0){
    console.log(`The given number '${number}' is divisible by both 3 and 5 and '${number}' is positive.`);
}
else if(number%3==0 && number>0){
    console.log(`The given number '${number}' is divisible by 3 and number '${number}' is positive.`);
}
else if(number%5==0 && number>0){
    console.log(`The given number '${number}' is divisible by 5 and number '${number}' is positive.`);
}
else{
    console.log(`The given number '${number}' is negative.`);
}

console.log(`Today's Day, Date, Time : ${Date()}`);

// string object iterability validation(iterable)
let studentName="Raam";
for(let studentNameIndex=0;studentNameIndex<=studentName.length-1;studentNameIndex++){
    console.log(studentName[studentNameIndex]);
}

// string object mutability validation(im-mutable)
studentName[studentName.length-1]="v";
console.log(studentName);