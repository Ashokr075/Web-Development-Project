// square shape operation
let squareSides=[5,10,15,20,25];

/*
function findAreaOfSquares(squareSidesArray){
    let areaOfSquaresArray=[];
    for(let squareSidesArrayIndex=0;squareSidesArrayIndex<=squareSidesArray.length-1;squareSidesArrayIndex++){
        let areaOfSquare=squareSidesArray[squareSidesArrayIndex]*squareSidesArray[squareSidesArrayIndex];
        areaOfSquaresArray.push(areaOfSquare);
    }
    return areaOfSquaresArray;
}
console.log(`Area of Squares : [${findAreaOfSquares(squareSides)}]`);

function findPerimeterOfSquares(squareSidesArray){
    let perimeterOfSquaresArray=[];
    for(let squareSidesArrayIndex=0;squareSidesArrayIndex<=squareSidesArray.length-1;squareSidesArrayIndex++){
        let perimeterOfSquare=4*squareSidesArray[squareSidesArrayIndex];
        perimeterOfSquaresArray.push(perimeterOfSquare);
    }
    return perimeterOfSquaresArray;
}
console.log(`Perimeter of Squares : [${findPerimeterOfSquares(squareSides)}]`);
*/
// function modularity
function iterateSquareSides(squareSidesArray,operationalLogic){
    let squareOperationalArray=[];
    for(let squareSidesArrayIndex=0;squareSidesArrayIndex<=squareSidesArray.length-1;squareSidesArrayIndex++){
        squareOperationalArray.push(operationalLogic(squareSidesArray[squareSidesArrayIndex]));
    }
    return squareOperationalArray;
}
console.log(`Area of Squares : [${iterateSquareSides(squareSides,(side)=>{return side*side})}]`);
console.log(`Perimeter of Squares : [${iterateSquareSides(squareSides,(side)=>{return 4*side})}]`);