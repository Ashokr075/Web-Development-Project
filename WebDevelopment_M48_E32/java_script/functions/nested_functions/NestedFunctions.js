// nested function(not recommended approach)
/*
function grandFather(){
    console.log("GrandFatherFunctionExecuted");
    function father(){
        console.log("FatherFunctionExecuted");
        function child(){
            console.log("ChildFunctionExecuted");
            function grandChild(){
                console.log("GrandChildFunctionExecuted");
            }
            grandChild();
        }
        child();
        }
    father();
}
grandFather();
*/

// nested function(recommended approach)
function grandFather(){
    console.log("GrandFatherFunctionExecuted");
    function father(){
        console.log("FatherFunctionExecuted");
        function child(){
            console.log("ChildFunctionExecuted");
            function grandChild(){
                console.log("GrandChildFunctionExecuted");
            }
            return grandChild;
        }
        return child;
    }
    return father;
}
grandFather()()()();