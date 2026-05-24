// variables
// variable_declaration_keyword identifier=data/value;
// var|let|const variableName=literals;

// differences between var | let | const

// case one:declaration and initialization(var | let | const)
var studentName="Pawan";
console.log(studentName);//utilization
let studentRollNumber=101;
console.log(studentRollNumber);
const earthGravityValue=9.81;
console.log(earthGravityValue);

// case two:re-initialization(var | let)
studentName="PawanKumar";
console.log(studentName);
studentRollNumber=102;
console.log(studentRollNumber);
// earthGravityValue=9.82;
console.log(earthGravityValue);

// case three:only declaration(var | let)
var laptopBrandName;
console.log(laptopBrandName);
let laptopPrice;
console.log(laptopPrice);
const piValue=3.142;
console.log(piValue);

// case four:re-declaration(var)
var laptopBrandName="hp";
console.log(laptopBrandName);
// let laptopPrice=50000;
// const piValue=3.142;

// case five:block-scoped variable(let | const)
if(true){
    var classRoomNumber=203;
    let subjectName="WebDevelopment";
    console.log(subjectName);
    const isSubjectUnderstood=true;
    console.log(isSubjectUnderstood);
}
console.log(classRoomNumber);

// case six:function-scoped variable(var | let | const)
function toCheckVariablesFunctionScoped(){
    var classRoomNumber=203;
    console.log(classRoomNumber);
    let subjectName="WebDevelopment";
    console.log(subjectName);
    const isSubjectUnderstood=true;
    console.log(isSubjectUnderstood);
}

// case seven:variable hoisting(var)
console.log(isVarHoisted);
var isVarHoisted=true;
// console.log(bagBrandName);
let bagBrandName="WildCraft";
// console.log(earthPosition);
const earthPosition=3;