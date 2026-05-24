// array object functions
// length:number
// indexOf(element,startIndex):firstIdentifiedElementIndex(forward)
// lastIndexOf(element,startIndex):firstIdentifiedElementIndex(backward)

// slice(startIndex,endIndex):subArray(forward)
let colors=["red","green","blue","magenta","white"];
console.log(colors.slice(0,2));
console.log(colors.slice(-3,5));

// splice(startIndex,deleteCount):deletedElementArray
console.log(colors.splice(0,2));
console.log(colors);

// toString():StringObject
console.log(colors.toString().replaceAll(","," | "));

// join():StringObject
// join(seperator):StringObject
let bagBrandNames=["Priority","WildCraft","SkyBags","Safari","IndianTourister","VIP","Aristocrat"];
console.log(bagBrandNames.join(" | "));

// push(elements):length
let laptopBrandNames=["hp","DELL"];
console.log(laptopBrandNames.push("ASUS","Lenovo","Apple"));

// pop():removedLastElement
console.log(laptopBrandNames.pop());
console.log(laptopBrandNames);

// unshift(elements):length
let personName=["Iyer"];
console.log(personName.unshift("Muthuswamy ","Venugopala "));
console.log(personName);

// shift():removedFirstElement
console.log(personName.shift());
console.log(personName);

// concat(elements):concatenatedArray
console.log(laptopBrandNames.concat("Apple(MacBook)"));

// reverse():reversedArray
let markerColor=["red","blue","black"];
console.log(markerColor);
console.log(markerColor.reverse());

// fill(element,startIndex,endIndex):filledArray
let fillableArray=new Array(10);
fillableArray.fill("SeniorCitizen",0,3);
fillableArray.fill("Male",3,7);
fillableArray.fill("Female",7);
console.log(fillableArray);

// flat(depthness):flattenedArray
let nestedArray=[["a","b",["A","B",["i","ii",[1,2,[10.0,20.0,["I","II"]]]]]],["c","d",["C","D",["iii","iv",[3,4,[30.0,40.0,["III","IV"]]]]]],["e","f",["E","F",["v","vi",[5,6,[50.0,60.0,["V","VI"]]]]]]];
console.log(nestedArray);
console.log(nestedArray.flat(Infinity));

// includes(element):boolean
let classRooms=[501,502,503,504];
if(classRooms.includes(505)){
    console.log("Get inside the classroom");
}

// sort(callBackFunction):sortedArray
let numbers=[10,-5,3,9,7,11];
console.log(numbers);
console.log(numbers.sort((firstNumber,secondNumber)=>{
    return secondNumber-firstNumber;
}));

// map(callBackFunction):mappedArray
let squareSides=[5,10,15,20,25];
console.log(`Area of Squares : [${squareSides.map((squareSide)=>{return squareSide*squareSide})}]`);
console.log(`Perimeter of Squares : [${squareSides.map((squareSide)=>{return 4*squareSide})}]`);

// filter(callBackFunction):filteredArray
let songsArray=[
    {songName:"ChikiriChikiri",singerName:"Mohith",composerName:"A R Rahman"},
    {songName:"KalluMoosiYochisthey",singerName:"Karthik",composerName:"Harris Jayaraj"},
    {songName:"GirlFriend",singerName:"Karthik",composerName:"A R Rahman"},
    {songName:"OkaMaaru",singerName:"Karthik",composerName:"Harris Jayaraj"},
    {songName:"AppudoEppudo",singerName:"Siddarth",composerName:"DSP"}
];
console.log(songsArray.filter((song)=>{
    if(song.singerName=="Karthik"){
        return song;
    }
}));
console.log(songsArray.filter((song)=>{
    if(song.composerName=="Harris Jayaraj"){
        return song;
    }
}));

// find(callBackFunction):foundElement
let numerics=[35,45,100,55,-10,-5];
console.log(numerics.find((numeric)=>{
    if(numeric<10){
        return numeric;
    }
}));

// findIndex(callBackFunction):foundElementIndex
let numericss=[35,45,100,55,-10,-5];
console.log(numericss.findIndex((numeric)=>{
    if(numeric<10){
        return numeric;
    }
}));

// some(callBackFunction):boolean
let subjectNames=["Java","Python","WebDevelopment","SQL","Aptitude"];
console.log(subjectNames.some((subjectName)=>{
    if(subjectName.length==3){
        return subjectName;
    }
}));

// every(callBackFunction):boolean
console.log(subjectNames.every((subjectName)=>{
    if(subjectName.length==3){
        return subjectName;
    }
}));
// keys(callBackFunction):ArrayIterator
let subjectNamesKeys=subjectNames.keys();
for(let subjectNamesKey of subjectNamesKeys){
    console.log(subjectNamesKey);
}
// values(callBackFunction):ArrayIterator
let subjectNamesValues=subjectNames.values();
for(let subjectNamesValue of subjectNamesValues){
    console.log(subjectNamesValue);
}
// entries(callBackFunction):ArrayIterator
let subjectNamesEntries=subjectNames.entries();
for(let subjectNamesEntry of subjectNamesEntries){
    console.log(subjectNamesEntry);
}
// how many ways developer can iterate on array object
let speakerBrandNames=["JBL","bOAt","SONY"];
// for loop:values
for(let speakerBrandNamesIndex=0;speakerBrandNamesIndex<=speakerBrandNames.length-1;speakerBrandNamesIndex++){
    console.log(speakerBrandNames[speakerBrandNamesIndex]);
}
// for of loop:values
for(let speakerBrandName of speakerBrandNames){
    console.log(speakerBrandName);
}
// for in loop:index(string)
for(let speakerBrandNamesIndex in speakerBrandNames){
    console.log(speakerBrandNamesIndex,typeof speakerBrandNamesIndex);
}
// forEach(callBackFunction):void
speakerBrandNames.forEach((speakerBrandName)=>{
    console.log(speakerBrandName);
});