// direct selectors(document object properties)

// title:string
console.log(document.title="DirectSelectors");

// body:BodyElement
let bodyElement=document.body;
Object.assign(bodyElement.style,{
    width:"100vw",
    height:"100vh",
    padding:"20px",
    backgroundImage:"radial-gradient(circle at bottom,lightgray,black)"
});

// images:HTMLCollection<HTMLImageElement>
let solarSystemImages=document.images;
for(let solarSystemImage of solarSystemImages){
    Object.assign(solarSystemImage.style,{
        width:"180px",
        padding:"10px",
        border:"10px solid white",
        borderRadius:"30px"
    });
}

// forms:HTMLCollection<HTMLFormElement>
let forms=document.forms;
for(let form of forms){
    if(form.id=="login_form"){
        Object.assign(form.style,{
            color:"white",
            border:"10px solid orange"
        });
    }
    else if(form.id=="signup_form"){
        Object.assign(form.style,{
            color:"orange",
            border:"10px solid white"
        });
    }
}

// anchors:HTMLCollection
let hyperlinks=document.anchors;
for(let hyperlink of hyperlinks){
    Object.assign(hyperlink.style,{
        fontSize:"2.5vw",
        color:"white",
        textShadow:"0px 0px 5px black"
    });
}