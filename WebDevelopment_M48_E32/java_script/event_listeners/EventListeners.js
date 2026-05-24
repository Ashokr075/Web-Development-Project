// event listeners
let colorButtons=document.getElementsByClassName("color_buttons");
let redButton=colorButtons[0];
let greenButton=colorButtons[1];
let darkBlueButton=colorButtons[2];

// addEventListeners("eventType",listenerFunction):void
redButton.addEventListener("click",(clickEventObject)=>{
    console.log(clickEventObject);
    console.log(`User clicked on redButton on the webpage at x-axis ${clickEventObject.x}px and y-axis ${clickEventObject.y}px`);
    document.body.style.backgroundColor=redButton.textContent;
});
greenButton.addEventListener("dblclick",(doubleClickEventObject)=>{
    console.log(doubleClickEventObject);
    document.body.style.backgroundColor=greenButton.textContent;
});
    
darkBlueButton.addEventListener("mouseover",(mouseOverEventObject)=>{
    console.log(mouseOverEventObject);
    document.body.style.backgroundColor=darkBlueButton.textContent;
});