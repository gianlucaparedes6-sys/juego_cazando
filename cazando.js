let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTURA_SUELO = 0;
const ALTURA_GATO = 60;
const ANCHO_GATO = 40;
const ANCHO_COMIDA = 20;
const ALTURA_COMIDA = 20;

let gatoX = canvas.width / 2 - ANCHO_GATO / 2;
let gatoY = canvas.height /2 - ALTURA_GATO / 2;
let comidaX = 480;
let comidaY = 480;


function iniciarJuego() {
   dibujarComida();
    dibujarGato();

}


function dibujarGato() {
    ctx.fillStyle = "black";
    ctx.fillRect(gatoX , gatoY , ANCHO_GATO, ALTURA_GATO);
}
function dibujarComida() {
    ctx.fillStyle = "red";
    ctx.fillRect(comidaX , comidaY , ANCHO_COMIDA, ALTURA_COMIDA);
}