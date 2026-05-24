// element creation
let headingNode=document.body.appendChild(document.createElement("h1"));
headingNode.textContent="WebDevelopment";
Object.assign(headingNode.style,{
    fontSize:"5vw",
    color:"orange",
    backgroundColor:"black",
    borderRadius:"20px",
    padding:"10px",
    textAlign:"center"
});