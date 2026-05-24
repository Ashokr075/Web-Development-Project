// dynamic buttons
let dynamicButtons=document.querySelectorAll(".dynamic_buttons");
let subscribeButton=dynamicButtons[0];
let subscribeButtonTools=document.querySelectorAll(".subscribe_button_tools");
let subscribeContent=subscribeButtonTools[0];
let subscribeDropDownIcon=subscribeButtonTools[1];

let subscribeButtonToggleCount=0;
subscribeButton.addEventListener("click",()=>{
    if(subscribeButtonToggleCount==0){
        setTimeout(()=>{
            subscribeContent.textContent="Subscribed";
            subscribeDropDownIcon.style.display=`inline`;
        },1000);
        subscribeButtonToggleCount=1;
    }
    else if(subscribeButtonToggleCount==1){
        setTimeout(()=>{
            subscribeContent.textContent="Subscribe";
            subscribeDropDownIcon.style.display=`none`;
        },1000);
        subscribeButtonToggleCount=0;
    }
});