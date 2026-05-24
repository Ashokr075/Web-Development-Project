// conditional statements
// if statement
/*
if(condition){
    //operational codes.
}
*/
let givenNumber=-10;
if(givenNumber>0){
    console.log("The given number '"+givenNumber+"' is positive.");
}
// if else statement
/*
if(condition){
    //operational codes.
}
else{
    //operational codes.
}
*/
if(givenNumber>0){
    console.log("The given number '"+givenNumber+"' is positive.");
}
else{
    console.log("The given number '"+givenNumber+"' is negative.");
}
// if..else if..else statement(if else if ladder)
/*
if(first_condition){
    // operational codes.
}
else if(second_condition){
    // operational codes.
}
else if(third_condition){
    // operational codes.
}
else{
    // operational codes.
}
*/
let weatherStatus="RAINY".toLowerCase();
if(weatherStatus==="sunny"){
    console.log("Please wear sunscreen and roam outside");
}
else if(weatherStatus==="cloudy"){
    console.log("The Sky is about to rain, Please make sure You guys are carrying umbrella");
}
else if(weatherStatus==="rainy"){
    console.log("Please wear raincoat and roam outside");
}
else if(weatherStatus==="windy"){
    console.log("Please wear helmets and drive the bikes");
}

let number=-15;
if(number%3==0 && number%5==0 && number>0){
    console.log("The number '"+number+"' is divisible by 3 and 5.");
}
else if(number%3==0 && number>0){
    console.log("The number '"+number+"' is divisible by 3.");
}
else if(number%5==0 && number>0){
    console.log("The number '"+number+"' is divisible by 5.");
}
else{
    console.log("The given number '"+number+ "' is negative. Bloody User, Please pass positive number.");
}

let dayCount=8;
if(dayCount==1){
    console.log("Sunday");
}
else if(dayCount==2){
    console.log("Monday");
}
else if(dayCount==3){
    console.log("Tuesday");
}
else if(dayCount==4){
    console.log("Wednesday");
}
else if(dayCount==5){
    console.log("Thursday");
}
else if(dayCount==6){
    console.log("Friday");
}
else if(dayCount==7){
    console.log("Saturday");
}
else{
    console.log("Enter valid day count, You have entered an in-valid day count '"+dayCount+"'.");
}
// switch case statement
/*
switch(keyFromUser){
    case firstCaseValue:caseOperation;
    break;
    case secondCaseValue:caseOperation;
    break;
    case thirdCaseValue:caseOperation;
    break;
    case fourthCaseValue:caseOperation;
    break;
    default:defaultCaseOperation;
}
*/
let monthCount=12;
switch(monthCount){
    default:console.log("Enter valid month count, You have entered an in-valid month count '"+monthCount+"'.")
    break;
    case 1:console.log("January");
    break;
    case 2:console.log("February");
    break;
    case 3:console.log("March");
    break;
    case 4:console.log("April");
    break;
    case 5:console.log("May");
    break;
    case 6:console.log("June");
    break;
    case 7:console.log("July");
    break;
    case 8:console.log("August");
    break;
    case 9:console.log("September");
    break;
    case 10:console.log("October");
    break;
    case 11:console.log("November");
    break;
    case 12:console.log("December");
    break;
}