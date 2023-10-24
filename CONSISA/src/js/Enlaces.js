var LS = document.getElementById("LS");
var BC = document.getElementById("BC");
var Dynamics = document.getElementById("Dynamics");
var Fabrica = document.getElementById("Fabrica");
var FabricaSoftware = document.getElementById("software");
var Arquitectura = document.getElementById("Arquitectura");
var Data = document.getElementById("Data");
var Seguridad = document.getElementById("Seguridad");
var Appydinamics = document.getElementById("Appydinamics");
var Idera = document.getElementById("Idera");
var Aranda = document.getElementById("Aranda");
var microfocus = document.getElementById("microfocus");
var Educonnet = document.getElementById("Educonnet");


function URLS(Boton, URL) {
    Boton.addEventListener("click", () => {
        location.href = URL;
    });
}

document.getElementById('Servicios').addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});

URLS(LS, "./CONSISA/src/html/lsRetail.html");
URLS(BC, "./CONSISA/src/html/dynamics-FO.html");
URLS(Dynamics, "./CONSISA/src/html/dynamics365.html");
URLS(Arquitectura, "./CONSISA/src/html/arquitectura.html");
URLS(Fabrica, "./CONSISA/src/html/fabrica.html");
URLS(FabricaSoftware, "./CONSISA/src/html/fabricaSoftware.html");
URLS(Data, "./CONSISA/src/html/datamanagement.html");
URLS(Seguridad, "./CONSISA/src/html/seguridad.html");
URLS(Appydinamics, "./CONSISA/src/html/appydinamics.html");
URLS(Idera, "./CONSISA/src/html/idera.html");
URLS(Aranda, "./CONSISA/src/html/aranda.html");
URLS(microfocus, "./CONSISA/src/html/microfocus.html");
URLS(Educonnet, "./CONSISA/src/html/educonnet.html");
