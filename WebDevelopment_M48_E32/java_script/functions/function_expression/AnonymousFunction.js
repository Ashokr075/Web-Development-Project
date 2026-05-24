// function expression(anonymous function)
let number=10;
let anonymousFunction=function (){
    // assignable operational code.
    console.log("PrintingStatement");
}
anonymousFunction();

// anonymous function without parameters and without return value
let areaOfRightAngledTriangle=function (){
    let base=15;
    let height=10;
    let areaOfRightAngledTriangle=0.5*base*height;
    console.log(`The area of right angled triangle of base '${base}' and height '${height}' : ${areaOfRightAngledTriangle}cm`);
}
areaOfRightAngledTriangle();

// anonymous function with parameters and without return value
let areaOfRightAngleTriangle=function (base,height){
    let areaOfRightAngleTriangle=0.5*base*height;
    console.log(`The area of right angled triangle of base '${base}' and height '${height}' : ${areaOfRightAngleTriangle}cm`);
}
areaOfRightAngleTriangle(25,35);
areaOfRightAngleTriangle(35,45);

// anonymous function with parameters and with return value
let squareRadius=function (radius){
    return radius*radius;
}
let areaOfCircle=function (){
    return `The area of circle : ${3.142*squareRadius(10)}cm`;
}
document.getElementById("anonymous_function_return_value").textContent=areaOfCircle();
document.getElementById("anonymous_function_operational_code").innerText=areaOfCircle;