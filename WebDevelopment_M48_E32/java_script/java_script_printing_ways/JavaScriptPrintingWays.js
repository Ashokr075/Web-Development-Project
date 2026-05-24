// java script printing ways
// console object
window.console.log("BrowserConsole");
// log():void
console.log(10+5);
console.log(10>5);
// warn():void
console.warn("Module is dangerous");
// error():void
console.error("ErrorMessage");
// dir():void
console.dir(console);
console.dir(document);
console.dir(window);

// document object
window.document.write("<span style='color:darkblue;'>FirstStatement</span><br>");
document.write("<span style='color:red;'>SecondStatement</span><br>");
document.writeln("ThirdStatement<br>");
document.writeln("FourthStatement<br>");
document.writeln("FifthStatement<br>");

// window object
window.console.log("BrowserConsole is a part of WindowObject, So Developer need not to specify window declaration");
window.document.write("DocumentObject is present inside WindowObject, So Developer need not to specify window declaration");

// reasons we should not use document.write() and writeln()
// reason one:when the java script file is loaded asynchronously, document.write() and writeln() will not work becoz of browser completes the execution of html document and closes it, so no one can write inside the document object and that is the reason, write() and writeln() are deprecated.
// reason two:document.write() and writeln(), will shift all the html elements to next line(down).
// reason three:when we use document.write() and writeln() inside functions, the old document object is replaced with new document object.

// innerHTML java script property:string
document.getElementById("container_one").innerHTML="<div style='width:50%;height:50%;background-color:yellow;'><div style='width:50%;height:50%;background-color:darkblue;'></div></div>";

// innerText java script property:string
document.getElementById("container_two").innerText=" <div style='width:50%;height:50%;background-color:yellow;'><div style='width:50%;height:50%;background-color:darkblue;'></div></div> ";

// textContent java script property:string
document.getElementById("container_three").textContent=" <div style='width:50%;height:50%;background-color:yellow;'><div style='width:50%;height:50%;background-color:darkblue;'></div></div> ";