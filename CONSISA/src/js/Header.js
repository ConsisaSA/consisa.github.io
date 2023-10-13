let animado = document.querySelectorAll('.Animado');
const style = document.documentElement.style;
var Toques = 0;
var Inicio = document.getElementById("index");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let AlturaAnimado = animado[i].offsetTop;
        if (AlturaAnimado - 500 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);


Inicio.addEventListener("click", () => {
    window.location.href = "../../../index.html";
});




