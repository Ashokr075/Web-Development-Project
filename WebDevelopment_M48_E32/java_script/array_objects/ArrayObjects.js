// array objects
// array literals([elements]):Array
let studentName=new String("Sai");
console.log(studentName);
let studentNames=["Sai","Pawan","SaiPawan"];
console.log(studentNames);
let yFacultyInformations=["Yashwanth",9597170600,27,"10LPA",true,true,false,undefined];
console.log(yFacultyInformations,typeof yFacultyInformations);

// empty array literals([]):Array
let amazonCart=[];
console.log(amazonCart);
amazonCart[0]="JockeyT-shirt";
amazonCart[1]="SparxShoe";
console.log(amazonCart);

// Array(arrayLength):Array
// Array(elements):Array
let laptopBrands=Array(10);
laptopBrands[0]="hp";
laptopBrands[2]="DELL";
console.log(laptopBrands);
let laptopBrandNames=Array("hp","DELL","Lenovo","ASUS");
console.log(laptopBrandNames);

// new Array(arrayLength):Array
// new Array(elements):Array
let bagBrands=new Array("WildCraft","SkyBags","AmericanTourister");
console.log(bagBrands,typeof bagBrands);
let bagBrandNames=new Array(10);
bagBrandNames[0]='AmericanTourister';
console.log(`BagBrandNames Container : [${bagBrandNames}]`);

// array object iterability validation(iterable)
for(let bagBrandNamesIndex=0;bagBrandNamesIndex<=bagBrandNames.length-1;bagBrandNamesIndex++){
    console.log(bagBrandNames[bagBrandNamesIndex]);
}

// array object mutabilityu validation(mutable)
console.log(bagBrands);
bagBrands[bagBrands.length-1]="IndianTourister";
console.log(bagBrands);