const root = document.documentElement;
export default function darkModeFuncion(btn){
    if(btn.getAttribute("data-emoji") == 'false'){
        btn.innerHTML = `🌙`;
        root.style.setProperty('--second-color', 'black');
        root.style.setProperty('--color-fondo', 'white');
    }else{
        btn.innerHTML = `🌞`;
        root.style.setProperty('--second-color', 'white');
        root.style.setProperty('--color-fondo', '#222');
        console.log("listo");
    }
    console.log(btn);
}

export function eventoDarkMode(btn){
    if(btn.getAttribute("data-emoji") == 'false') btn.setAttribute("data-emoji", "true");
    else btn.setAttribute("data-emoji", "false");
    darkModeFuncion(btn);
}