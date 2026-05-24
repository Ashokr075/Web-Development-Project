// java script objects
// java script objects literals({key:value}):Object
let yFacultyInformations={
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
    }
}
console.log(yFacultyInformations);
console.log(`Y Faculty's Informations : ${yFacultyInformations.name} is having skills set as ${yFacultyInformations.skillSet[3]}`);

// new Object():Object
let hpLaptopObject=new Object();
hpLaptopObject.price=55000;
hpLaptopObject.brandName="hp";
hpLaptopObject.color="DarkGray";
console.log(`HP Laptop Details : Price-₹${hpLaptopObject.price} | BrandName-${hpLaptopObject.brandName} | Color-${hpLaptopObject.color}`);

let dellLaptopObject=new Object();
dellLaptopObject.price=45000;
dellLaptopObject.brandName="DELL";
dellLaptopObject.color="Gray";
console.log(`DELL Laptop Details : Price-₹${dellLaptopObject.price} | BrandName-${dellLaptopObject.brandName} | Color-${dellLaptopObject.color}`);

let asusLaptopObject=new Object();
asusLaptopObject.price=75000;
asusLaptopObject.brandName="ASUS";
asusLaptopObject.color="LightGray";
console.log(`ASUS Laptop Details : Price-₹${asusLaptopObject.price} | BrandName-${asusLaptopObject.brandName} | Color-${asusLaptopObject.color}`);

// constructor function(before ES6 java script):Object
function Laptop(price,brandName,color){
    this.price=price;
    this.brandName=brandName;
    this.color=color;
}
let hpLaptop=new Laptop(55000,"hp","DarkGray");
console.log(hpLaptop);
let dellLaptop=new Laptop(45000,"DELL","Gray");
console.log(dellLaptop);
let asusLaptop=new Laptop(75000,"ASUS","LightGray");
console.log(asusLaptop);

// class declaration(after ES6 java script):Object
class Student{
    // constructor declaration
    constructor(rollNumber,studentName,courseName,instituteName){
        this.rollNumber=rollNumber;
        this.studentName=studentName;
        this.courseName=courseName;
        this.instituteName=instituteName;
    }
}
let saiStudent=new Student(111,"SaiTeja","WebDevelopment","J🕷🕸");//object creation
console.log(saiStudent);

/*
1.whenever we want to perform object-based programing, we can create the object by any one of the above three ways.
2.whenever we want to perform object-oriented programing, we can create the object only by using class declaration.
*/

// java script object iterability validation(non-iterable)
// java script object mutability validation(mutable)
yFacultyInformations.salary="13LPA";
console.log(yFacultyInformations);
saiStudent.studentName="SaiKumar";
console.log(saiStudent);