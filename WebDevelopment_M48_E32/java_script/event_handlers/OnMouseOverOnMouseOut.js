// onmouseover onmouseout event handler
let spaceContainer=document.getElementById("space_container");
let planetContainer=document.getElementById("planet_container");
let imagesArray=["Earth","Moon","Sun"];
let imagesArrayIndex=0;
// handler function
function changePlanetContainerImages(){
    planetContainer.style.backgroundImage=`url(../../assets/images/${imagesArray[imagesArrayIndex++]}.png)`;
    if(imagesArrayIndex==imagesArray.length){
        imagesArrayIndex=0;
    }
}