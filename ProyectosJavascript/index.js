import hamburguerMenu from "./JS/menuHamburguesa.js";
import { digitalClock , alarma } from "./JS/reloj.js";
import { moveBall } from "./JS/teclado.js";
import { imprimirFecha, guardarFecha } from "./JS/cuentaRegresiva.js";
import scrollTopButton from "./JS/botonTop.js";
import darkModeFuncion, { eventoDarkMode } from "./JS/darkMode.js";

const d = document;

d.addEventListener("DOMContentLoaded",e => {
    hamburguerMenu(".panel-btn",".panel");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarma("#reloj","#activar-alarma","#desactivar-alarma");
    scrollTopButton(".scroll-top-btn");
    darkModeFuncion($btnDark);
})

let stageBox = document.querySelector('.stage');
stageBox.addEventListener('keydown', function(e) {
        moveBall(e,".ball",".stage");
});

let $botonFecha = d.querySelector("button[id=\"crearFecha\"]");
$botonFecha.addEventListener("click", (e) => {
    $botonFecha.disabled = true;
    console.log(guardarFecha());
    imprimirFecha();
    e.preventDefault();
});

let $btnDark = d.querySelector(".button-dark-mode");
$btnDark.addEventListener("click",() => {
    eventoDarkMode($btnDark);
})

