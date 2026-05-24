// error handling
let studentName="Pawan";
console.log(studentName);
let studentNames=["Sai","Pawan","SaiPawan"];
console.log(studentNames);
try{
    console.log(studentNamess);
}
catch(errorObject){
    console.log(`Something went wrong : ${errorObject}`);
}
finally{
    /*
    important statements
    database connection closing codes
    costly resources code
    */
}
console.log("Program Ends.");