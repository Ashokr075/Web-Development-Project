// in-direct selectors(document object functions)

// getElementById("id_value"):HTMLElement
let coreJavaHeading=document.getElementById("core_java_heading");
coreJavaHeading.textContent="CoreJava";

// getElementsByClassName("class_value"):HTMLCollection
let courseHeadings=document.getElementsByClassName("course_headings");
courseHeadings[1].textContent="WebDevelopment";

// getElementsByTagName("tagname"):HTMLCollection
let payButtons=document.getElementsByTagName("button");
payButtons[0].textContent="PayNow";
payButtons[1].textContent="PayLater";
 
// getElementsByName("name_value"):NodeList
let genderRadioButtons=document.getElementsByName("Gender");
console.dir(genderRadioButtons);

// querySelector("#id_value" | ".class_value" | "tagname"):FirstHTMLElement
let courseHeadingss=document.querySelector(".course_headings");
console.dir(courseHeadingss);
let genderHeading=document.querySelector("#gender_heading");
genderHeading.textContent="Gender";
// querySelectorAll("#id_value" | ".class_value" | "tagname"):NodeList
let payButtonss=document.querySelectorAll(".pay_buttons");
console.dir(payButtonss);