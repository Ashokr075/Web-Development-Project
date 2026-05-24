// onclick event handler
let colorButtons=document.querySelectorAll(".color_buttons");
let redButton=colorButtons[0];
let greenButton=colorButtons[1];
let darkBlueButton=colorButtons[2];

// handler function
function changeBodyBackgroundColor(colorName){
    document.body.style.backgroundColor=colorName;
}