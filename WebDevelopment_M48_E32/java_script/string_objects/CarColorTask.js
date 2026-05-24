// car color task
let colorName=prompt("Enter ColorName");
let carName=prompt("Enter CarName");
document.getElementById("car_color_statement").innerHTML=`I love <span style="color:${colorName};">${colorName}</span> color <span style="color:${colorName};">${carName}</span> car`;