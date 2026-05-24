document.getElementById("topic_heading").textContent="DocumentObjectModel";

// childNodes:NodeList
console.dir(document.childNodes);
console.dir(document.head.childNodes);
console.dir(document.body.childNodes);

// children:HTMLCollection
console.dir(document.children);
console.dir(document.head.children);
console.dir(document.body.children);

// childElementCount:number
console.log(document.head.childElementCount);
console.log(document.body.childElementCount);