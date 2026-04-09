let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTURA_SUELO = 0;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
let personajeX = canvas.width / 2;
let personajeY = canvas.clientHeight - (ALTURA_SUELO + ALTURA_PERSONAJE);
let limonX = canvas.width / 2 ;
let limonY = 0;


function iniciar() {
   // dibujarSuelo();
    dibujarPersonaje();

}


function dibujarPersonaje() {
    ctx.fillStyle = "red";
    ctx.fillRect(personajeX , personajeY , ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}