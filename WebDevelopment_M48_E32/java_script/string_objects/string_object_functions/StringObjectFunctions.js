// string object functions
// length:number
let bagBrandName="WildCraftCraftCraft";//implicit boxing
console.log(bagBrandName.length);

// charAt(index):string
for(let bagBrandNameIndex=0;bagBrandNameIndex<=bagBrandName.length-1;bagBrandNameIndex++){
    console.log(bagBrandName.charAt(bagBrandNameIndex));
}
// indexOf(string,startIndex):firstIdentifiedElementIndex(forward)
// lastIndexOf(string,startIndex):firstIdentifiedElementndex(backward)
console.log(bagBrandName.indexOf("C",5));
console.log(bagBrandName.lastIndexOf("C"));

// slice(startIndex,endIndex):substring
let bagName="WildCraft";
console.log(bagName.slice(0));//WildCraft
console.log(bagName.slice(0,4));//Wild
console.log(bagName.slice(4));//Craft
console.log(bagName.slice(-9,-5));//Wild
console.log(bagName.slice(-5));//Wild
console.log(bagName.slice(-9,4));//Wild

// substring(startIndex,endIndex):substring
console.log(bagName.substring(0));//WildCraft
console.log(bagName.substring(0,4));//Wild
console.log(bagName.substring(4));//Craft
console.log(bagName.substring(-9,-5));//
console.log(bagName.substring(-5));//WildCraft
console.log(bagName.substring(-9,4));//Wild
console.log(bagName.substring(-9,4));//Wild
console.log(bagName.substring(0,-5));//

// substr(fromIndex,requiredLength):substring
console.log(bagName.substr(0,4));
console.log(bagName.substr(0,3));
console.log(bagName.substr(0,2));
console.log(bagName.substr(0,1));

// replace(oldString,newString):replacedString
let movieReview="He acted in the movie and He is an legendary actor, He proves everytime Gravity does not exist in real world.";
console.log(movieReview.replace("He","Balayya"));
// replaceAll(oldString,newString):replacedString
console.log(movieReview.replaceAll("He","Balayya"));

let fruitName=" apple ";
console.log(fruitName);
// trim():trimedString
console.log(fruitName.trimStart());
// trim():trimedString
console.log(fruitName.trimEnd());
// trim():trimedString
console.log(fruitName.trim());
let projectorName=" E P S O N ";
console.log(projectorName);
console.log(projectorName.trim().replaceAll(" ",""));

let subjectName="Programing";
// padStart(maxLength,fillString):concatenatedString
console.log(subjectName.padStart(15,"Java "));
let courseName="Front";
// padEnd(maxLength,fillString):concatenatedString
console.log(courseName.padEnd(9," End"));
// concat():concatenatedString
let course="Java";
console.log(course.concat(" Script"));

let emailUsername="sai@gmail.com";
// includes(string):boolean
if(emailUsername.includes("@gmail.com")){
    console.log("EmailUsername is valid");
}
else{
    console.log("EmailUsername is in-valid");
}
// startsWith(string):boolean
if(emailUsername.startsWith("@gmail.com")){
    console.log("EmailUsername is valid");
}
else{
    console.log("EmailUsername is in-valid");
}
// endsWith(string):boolean
if(emailUsername.endsWith("@gmail.com")){
    console.log("EmailUsername is valid");
}
else{
    console.log("EmailUsername is in-valid");
}

// toLowerCase():lowerCasedString
let weatherStatus="SUNNY";
console.log(weatherStatus.toLowerCase());
// toUpperCase():upperCasedString
let firstFrontEndTechnology="html";
console.log(firstFrontEndTechnology.toUpperCase());

// italics():italicsElement(<i>returnValue</i>)
function toValidateNumberPositiveOrNegative(givenNumber){
    if(givenNumber>0){
        return `${givenNumber} is positive`.italics();
    }
    else{
        return `${givenNumber} is negative`.italics();
    }
}
document.getElementById("result_statement").innerHTML=toValidateNumberPositiveOrNegative(-10);

// split(splitter):ArrayObject
let statement="Raja Loves Rani";
console.log(statement.split(" ").length);

// how many ways developer can iterate on string object
let speakerBrandName="JBL";
// for loop:values
for(let speakerBrandNameIndex=0;speakerBrandNameIndex<=speakerBrandName.length-1;speakerBrandNameIndex++){
    console.log(speakerBrandName.charAt(speakerBrandNameIndex));
}
// for of loop:values
for(let speakerBrandNameCharacter of speakerBrandName){
    console.log(speakerBrandNameCharacter);
}
// for in loop:index(string)
for(let speakerBrandNameIndex in speakerBrandName){
    console.log(speakerBrandNameIndex, typeof speakerBrandNameIndex);
}