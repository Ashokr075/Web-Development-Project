// set clear functions
let grayColorBall=document.getElementById("gray_color_ball");
let buttons=document.querySelectorAll(".buttons");
let startButton=buttons[0];
let stopButton=buttons[1];
let setIntervalID;
// setTimeout(timerHandler,timeOut):number
// setInterval(timerHandler,timeOut):number

function translateGrayColorBall(){
    setTimeout(()=>{
        grayColorBall.style.transform="translateX(90vw)";
    },2000);
    setTimeout(()=>{
        grayColorBall.style.transform="translate(90vw,79vh)";
    },4000);
    setTimeout(()=>{
        grayColorBall.style.transform="translate(0vw,79vh)";
    },6000);
    setTimeout(()=>{
        grayColorBall.style.transform="translate(0vw,0vh)";
    },8000);
}
startButton.addEventListener("click",()=>{
    translateGrayColorBall();
    setIntervalID=setInterval(()=>{
        translateGrayColorBall();
    },10000);
});
// clearTimeout(setTimeoutID):void
// clearInterval(setIntervalID):void
stopButton.addEventListener("click",()=>{
    clearInterval(setIntervalID);
});