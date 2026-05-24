// onfocus onblur event handler
let searchInputBox=document.querySelector("#search_inputbox");

// handler function
function createOutline(){
    searchInputBox.style.outline="3px solid skyblue";
    searchInputBox.style.outlineOffset="2px";
}
function removeOutline(){
    searchInputBox.style.outline="none";
}