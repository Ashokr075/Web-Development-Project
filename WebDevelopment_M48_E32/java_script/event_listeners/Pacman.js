// pacman
let bodyElement=document.body;
let pacmanImage=document.getElementById("pacman_image");
let horizontalMove=0;
let verticalMove=0;

bodyElement.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowRight"){
        pacmanImage.style.transform=`translate(${++horizontalMove}vw,${verticalMove}vh)`;
    }
});
bodyElement.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowUp"){
        pacmanImage.style.transform=`translate(${horizontalMove}vw,${--verticalMove}vh) rotateZ(-90deg)`;
    }
});
bodyElement.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowLeft"){
        pacmanImage.style.transform=`translate(${--horizontalMove}vw,${verticalMove}vh) rotateY(180deg)`;
    }
});
bodyElement.addEventListener("keydown",(keyDownEventObject)=>{
    if(keyDownEventObject.key=="ArrowDown"){
        pacmanImage.style.transform=`translate(${horizontalMove}vw,${++verticalMove}vh) rotateZ(90deg)`;
    }
});