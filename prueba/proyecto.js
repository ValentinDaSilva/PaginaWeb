import hamburguerMenu from "./JS/menuHamburguesa.js";
import { digitalClock , alarma } from "./JS/reloj.js";
import { moveBall } from "./JS/teclado.js";
import { imprimirFecha, guardarFecha } from "./JS/cuentaRegresiva.js";
import scrollTopButton from "./JS/botonTop.js";
import darkModeFuncion, { eventoDarkMode } from "./JS/darkMode.js";
import offline, { online } from "./JS/conexion.js";
import search from "./JS/search.js";

const d = document;

d.addEventListener("DOMContentLoaded",e => {
    hamburguerMenu(".panel-btn",".panel");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarma("#reloj","#activar-alarma","#desactivar-alarma");
    scrollTopButton(".scroll-top-btn");
    darkModeFuncion($btnDarkMode);
})

let stageBox = document.querySelector('.stage');
stageBox.addEventListener('keydown', function(e) {
        moveBall(e,".ball",".stage");
});

let $botonFecha = d.querySelector("button[id=\"crearFecha\"]");
$botonFecha.addEventListener("click", (e) => {
    imprimirFecha();
    e.preventDefault();
});

let $btnDarkMode = d.querySelector(".button-dark-mode");
$btnDarkMode.addEventListener("click", ()=>{
    eventoDarkMode($btnDarkMode);
})

window.addEventListener("offline", ()=> offline());
window.addEventListener("online", ()=> online());

let $buscador = d.querySelector("input[name=\"buscador\"]");
let $copiaCards = d.querySelectorAll(".card");//copia de los nodos de tarjetas
$buscador.addEventListener("keyup", (e)=>{
    search($buscador,$copiaCards);
})


  