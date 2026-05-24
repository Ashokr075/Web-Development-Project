// onmousedown onmouseup event handler
let passwordInputBox=document.getElementById("password_inputbox");
let eyeIconContainer=document.getElementById("eye_icon_container");
// handler function
function showPassword(){
    passwordInputBox.type="text";
    eyeIconContainer.innerHTML=`<i class="fa-solid fa-eye-slash"></i>`;
}
function hidePassword(){
    passwordInputBox.type="password";
    eyeIconContainer.innerHTML=`<i class="fa-solid fa-eye"></i>`;
}