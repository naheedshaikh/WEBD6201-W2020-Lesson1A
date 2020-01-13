//IIFE  -  immediatley invoke function Expression
//Anonymous self executing function
(function(){
    function Start()
    {
        console.log("App Started...");

        let firstHeading = document.getElementById("firstHeading");

        firstHeading.textContent = "Goodbye Cruel World!";

        // document.getElementById("firstHeadig").textContent = "Goodbye Cruel World!";

        firstHeading.style.fontWeight = "bold";

        let main = document.getElementsByTagName("main")[0];

        //Configuaring my new elements
        let newH2 = document.createElement("h2");
        newH2.setAttribute("class", "Display-2");
        newH2.textContent="secondary heading";

        main.appendChild(newH2);
    }

    window.addEventListener("load",Start);

})();