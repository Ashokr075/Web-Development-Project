// find gray area
let areaOfCircle=radius=>{return Math.PI*radius*radius};
let areaOfRightAngledTriangle=(base,height)=>{return 0.5*base*height};
let areaOfSquare=side=>{return side*side};

// function composition
let areaOfGrayPortion=()=>{return areaOfSquare(350)-(areaOfCircle(50)+areaOfRightAngledTriangle(300,350))};
document.getElementById("result_statement").innerHTML=`The area of gray portion : ${parseInt(areaOfGrayPortion())}cm<sup>2</sup>`;