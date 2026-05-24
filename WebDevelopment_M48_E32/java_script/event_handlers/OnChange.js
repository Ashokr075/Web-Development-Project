// onchange event handler
let colorStatement=document.getElementById("color_statement");
// handler function
function changeBodyBackgroundColor(){
    let colorValue=document.getElementById("color_drop_down_list").value;
    if(colorValue!="--SelectColor--"){
        document.body.style.backgroundColor=colorValue;
        colorStatement.textContent=`I love ${colorValue}`;
    }
    else{
        document.body.style.backgroundColor="transparent";
        colorStatement.textContent=``;
    }
}