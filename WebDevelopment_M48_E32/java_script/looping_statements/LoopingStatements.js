// looping statements
// for loop(limited iterations)
/*
for(initialization;condition;updation){
    operational codes.
}
*/
for(let operationCount=1;operationCount<=1000;operationCount++){
    console.log("Guru is always Guru🔥🔥");
}

// while loop
/*
while(condition){
    operational codes.
}
*/
/*
let password=prompt("Bloody, Enter Password");
while(password.length!=8){
    password=prompt("Re-enter Password, Password is not matching length criteria(Enter 8 characters...)");
    if(password.length==8){
        console.log(password);
    }
}
*/
// what if, the user provides correct password for the first time...
let userPassword=prompt("Bloody, Enter Password");
let userPasswordStatus=false;
do{
    if(userPassword.length==8){
        console.log(userPassword);
        userPasswordStatus=true;
    }
    else{
        userPassword=prompt("Re-enter Password, Password is not matching length criteria(Enter 8 characters...)");
    }
}while(!(userPasswordStatus));

// do while loop
/*
do{
    operational codes.
}while(condition);
*/
// data from API fetching
let databaseUsername="sai_kumar";
let databasePassword="sai1234$";
// data from user
let enteredUsername=prompt("Enter Username");
let enteredPassword=prompt("Enter Password");
let loginCredentialsStatus=false;
do{
    if(databaseUsername===enteredUsername){
        if(databasePassword===enteredPassword){
            loginCredentialsStatus=true;
            document.getElementById("actual_credentials").textContent=enteredUsername+" | "+enteredPassword;
        }
        else{
            enteredPassword=prompt("Re-enter Password");
        }
    }
    else{
        enteredUsername=prompt("Re-enter Username ");
    }
}while(!(loginCredentialsStatus));