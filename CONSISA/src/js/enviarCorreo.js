document.getElementById("FormularioCorreo").addEventListener("submit", function (event) {
    event.preventDefault();

    // Recopila los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const Requerimiento = document.getElementById("Requerimiento").value;

    /*    
    fetch("/Correo, {
        method: "POST",
        body: JSON.stringify({ nombre, email, telefono, Requerimiento})),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {        
        console.log(data);
    })
    .catch(error => {
        console.error("Ha ocurrido un error:", error);
    });*/

    alert(JSON.stringify({ nombre, email, telefono, Requerimiento}));
    
});