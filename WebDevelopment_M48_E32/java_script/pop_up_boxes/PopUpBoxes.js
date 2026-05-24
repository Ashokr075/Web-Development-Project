/*
pop up boxes are used for communicating with the user
*/
console.dir(window);
// alert pop up box
// alert("AlertMessage"):void
let alertStatus=alert("WebPage is Dangerous");
console.log(alertStatus);

// confirm pop up box
// confirm("ConfirmMessage"):boolean
let confirmStatus=confirm("Do you proceed the same process, again...??");
console.log(confirmStatus);

// prompt pop up box
// prompt("PromptMessage"):string | null
let username=prompt("Enter Username");
console.log(username);
let password=prompt("Enter Password");
console.log(password);