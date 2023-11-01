const Tipo = document.getElementById("Tipo");
const chkTipo = document.getElementById("chkTipo");

chkTipo.addEventListener("change", () =>{
    if(chkTipo.checked == true){
        Tipo.innerHTML = "MOVIL";
        style.setProperty("--TranslateMovil", "100px");
        style.setProperty("--TranslateWeb", "1000px");
    }else{
        Tipo.innerHTML = "WEB";
        style.setProperty("--TranslateMovil", "-650px");
        style.setProperty("--TranslateWeb", "-600px");
    }
});