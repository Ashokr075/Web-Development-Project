// java script object functions
let facultyInformations={
    name:new String("Yashwanth"),
    mobileNumber:9597170631,
    age:27,
    salary:"10LPA",
    isMarried:true,
    isGraduated:true,
    hasChildren:false,
    skillSet:{
        1:"HTML",
        2:"CSS",
        3:"JavaScript",
        4:"CoreJava"
    },
    residentialAddress:{
        streetNumber:8,
        colonyName:"WesternHillsColony",
        societyName:"AddaguttaSociety",
        apartmentName:"Madinenium Community Living",
        landmark:"CocunutTheories",
        cityNameAndPostalCode:"Hyderabad-500072"
    },
    trainingDomains:{}
}
// Object.keys(object):keys[]
console.log(Object.keys(facultyInformations));
// Object.values(object):values[]
console.log(Object.values(facultyInformations));
// Object.entries(object):entries[]
console.log(Object.entries(facultyInformations));

// Object.seal(object):sealedObject
Object.seal(facultyInformations);
Object.seal(facultyInformations.skillSet);
// manipulations(modification | addition | deletion)
facultyInformations.skillSet[4]="Java";
facultyInformations.skillSet[5]="Aptitude";
delete  facultyInformations.hasChildren;
console.log(facultyInformations);

// Object.freeze(object):frozenObject
Object.freeze(facultyInformations);
Object.freeze(facultyInformations.skillSet);
// manipulations(modification | addition | deletion)
facultyInformations.age=30;
console.log(facultyInformations);

// how to deep freeze the java script object
function deepFreezeObjects(javaScriptObject){
    Object.freeze(javaScriptObject);
    for(let object of Object.values(javaScriptObject)){
        if(typeof object=="object" && object!=null){
            deepFreezeObjects(object);
        }
    }
}
deepFreezeObjects(facultyInformations);
// Object.isFrozen(object):boolean
// Object.isSealed(object):boolean
console.log(Object.isFrozen(facultyInformations));
console.log(Object.isFrozen(facultyInformations.skillSet));
console.log(Object.isFrozen(facultyInformations.residentialAddress));

let hpLaptop={
    brandName:"hp"
};
Object.seal(hpLaptop);
// Object.assign(targetObject,sourceObject):assignedObject
Object.assign(hpLaptop,{
    brandName:"DELL",
    modelName:"NoteBookPC",
    color:"DarkGray"
});
console.log(hpLaptop);