// value js property
// handler function
function printLoginCredentials(){
    let inputBoxes=document.querySelectorAll(".input_boxes");
    let username=inputBoxes[0].value;
    let password=inputBoxes[1].value;
    let errorStatement=document.getElementById("error_statement");
    let credentialsSpan=document.getElementsByClassName("credentials_span");
    let usernameSpan=credentialsSpan[0];
    let passwordSpan=credentialsSpan[1];
    if(username!="" && password!=""){
        usernameSpan.textContent=`Username : ${username}`;
        passwordSpan.textContent=`Password : ${password}`;
        errorStatement.textContent="";
        inputBoxes[0].value="";
        inputBoxes[1].value="";
    }
    else{
        errorStatement.textContent="Please provide valid credentials";
    }
}