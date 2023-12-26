import hamburguerMenu from "./JS/menuHamburguesa.js";
import { digitalClock , alarma } from "./JS/reloj.js";
import { moveBall } from "./JS/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded",e => {
    hamburguerMenu(".panel-btn",".panel");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarma("#reloj","#activar-alarma","#desactivar-alarma");
})

d.addEventListener("keydown", e =>{
    moveBall(e,".ball",".stage");
})