//IIFE  -  immediatley invoke function Expression
//Anonymous self executing function
(function(){
    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load",Start);

})();