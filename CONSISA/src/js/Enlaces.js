var LS = document.getElementById("LS");
var BC = document.getElementById("BC");
var Dynamics = document.getElementById("Dynamics");
var Fabrica = document.getElementById("Fabrica");

function URLS(Boton, URL){
    Boton.addEventListener("click", () =>{
        location.href = URL;
    });    
}

URLS(LS, "./CONSISA/src/html/lsRetail.html");
URLS(BC, "./CONSISA/src/html/dynamics-FO.html");
URLS(Dynamics, "./CONSISA/src/html/dynamics365.html");
URLS(Fabrica, "./CONSISA/src/html/fabrica.html");
