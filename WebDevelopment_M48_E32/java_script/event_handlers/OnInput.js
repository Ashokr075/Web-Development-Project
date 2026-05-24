// oninput event handler
let errorStatement=document.getElementById("error_statement");
// handler function
function validatePasswordBasedOnLength(){
    let password=document.getElementById("password_inputbox").value;
    if(password.length==0){
        errorStatement.textContent="";
    }
    else if(password.length<8){
        errorStatement.textContent="Password is too short.";
        errorStatement.style.color="red";
    }
    else if(password.length>=8 && password.length<=16){
        errorStatement.textContent="Strong Password.";
        errorStatement.style.color="green";
    }
    else if(password.length>16){
        errorStatement.textContent="Password is too long.";
        errorStatement.style.color="orange";
    }
}