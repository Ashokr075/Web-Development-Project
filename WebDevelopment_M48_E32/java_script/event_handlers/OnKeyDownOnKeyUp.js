// onkeydown onkeyup event handler
let superMarioMarquee=document.getElementById("super_mario_marquee");
// handler function
function makeSuperMarioJump(){
    superMarioMarquee.style.transform="translateY(-250px)"
}
function makeSuperMarioComeBack(){
    superMarioMarquee.style.transform="translateY(0px)"
}