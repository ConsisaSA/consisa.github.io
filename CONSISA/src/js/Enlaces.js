var LS = document.getElementById("LS");
var BC = document.getElementById("BC");
var Dynamics = document.getElementById("Dynamics");
var Fabrica = document.getElementById("Fabrica");
var Arquitectura = document.getElementById("Arquitectura");
var Data = document.getElementById("Data");
var Seguridad = document.getElementById("Seguridad");
var Outsourcing = document.getElementById("Outsourcing");
var Idera = document.getElementById("Idera");
var Aranda = document.getElementById("Aranda");

function URLS(Boton, URL){
    Boton.addEventListener("click", () =>{
        location.href = URL;
    });    
}

URLS(LS, "./CONSISA/src/html/lsRetail.html");
URLS(BC, "./CONSISA/src/html/dynamics-FO.html");
URLS(Dynamics, "./CONSISA/src/html/dynamics365.html");
URLS(Arquitectura, "./CONSISA/src/html/arquitectura.html");
URLS(Fabrica, "./CONSISA/src/html/fabrica.html");
URLS(Data, "./CONSISA/src/html/datamanagement.html");
URLS(Seguridad, "./CONSISA/src/html/seguridad.html");
// URLS(Outsourcing, "./CONSISA/src/html/fabrica.html");
URLS(Idera, "./CONSISA/src/html/idera.html");
URLS(Aranda, "./CONSISA/src/html/aranda.html");
