var toques = 0;

const style = document.documentElement.style;

const Menu = document.getElementById("Menu");

Menu.addEventListener("click", () =>{
    toques ++; 
    if(toques == 1){        
        style.setProperty('--Rotate', '90deg');
        style.setProperty('--TranslateMenu', '0px');
    }else if(toques == 2){        
        style.setProperty('--Rotate', '00deg');
        style.setProperty('--TranslateMenu', '-200px');
        toques = 0;
    }
});