const Tipo = document.getElementById("Tipo");
const chkTipo = document.getElementById("chkTipo");
const Contactenos2 = document.getElementById("Contactenos2");

chkTipo.addEventListener("change", () =>{
    if(chkTipo.checked == true){
        Tipo.innerHTML = "MOVIL";
        style.setProperty("--TranslateMovil", "50px");
        style.setProperty("--TranslateWeb", "1000px");
        style.setProperty("--TranslateModulo", "0px");
        style.setProperty("--TranslateModulo2", "1000px");
        
        document.querySelector(".C1h2").innerHTML = "Modulo Asignaciones";
        document.querySelector(".C1P1").innerHTML = "Con nuestro módulo de Asignaciones, puedes rastrear las tareas pendientes y proyectos especiales, recibir notificaciones de fechas límite para garantizar que los alumnos estén al día con sus responsabilidades académicas. <br><br> Nunca más perderan una tarea importante o se quedaran desinformados.";            
    }else{
        Tipo.innerHTML = "WEB";
        style.setProperty("--TranslateMovil", "-650px");
        style.setProperty("--TranslateWeb", "-0px");
        
        style.setProperty("--TranslateModulo", "-1000px");
        style.setProperty("--TranslateModulo2", "0px");
        
        document.querySelector(".C1h2").innerHTML = "Modulo De Reportes";
        document.querySelector(".C1P1").innerHTML = "Este módulo proporciona una plataforma centralizada para administrar eficazmente los procesos de matrícula, seguimiento de pagos y generación de informes financieros.";
    }
});

Contactenos2.addEventListener("click", () =>{
    location.href = "../../../index.html#Contactenos";
})


function Opacidad(OpacidadPor){
    style.setProperty("--Letras", OpacidadPor);
}
