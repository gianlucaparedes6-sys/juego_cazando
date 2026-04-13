let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTURA_SUELO = 0;
const ALTURA_GATO = 60;
const ANCHO_GATO = 40;
const ANCHO_COMIDA = 20;
const ALTURA_COMIDA = 20;
let gatoX = canvas.width / 2 - ANCHO_GATO / 2;
let gatoY = canvas.height /2 - ALTURA_GATO / 2;
let comidaX = Math.floor(Math.random() * 20) * 20; 
let comidaY = Math.floor(Math.random() * 20) * 20;
let puntaje = 0;
let tiempo = 10;
let intervaloTiempo = 1000;

function iniciarJuego() {
    graficarComida();
    graficarGato();
    restarTiempo();
    setInterval(restarTiempo, intervaloTiempo);
    
}
function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTURA_GATO, "black");
   }
function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTURA_COMIDA, "red");
   }
function graficarRectangulo(x, y, ancho, altura, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, altura);
    

}
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function moverIzquierda() {
    gatoX = gatoX -10;
    limpiarCanvas();
    graficarComida();
    graficarGato();
    detectarColision();
    }
function moverDerecha() {
    gatoX = gatoX +10;
    limpiarCanvas();
    graficarComida();
    graficarGato();
    detectarColision();
    
}
function moverArriba() {
    gatoY = gatoY -10;
    limpiarCanvas();
    graficarComida();
    graficarGato();
    detectarColision();
    
}
function moverAbajo() {
    gatoY = gatoY +10;
    limpiarCanvas();
    graficarComida();
    graficarGato();
    detectarColision();
    
 }
function detectarColision() {
    if (comidaX + ANCHO_COMIDA > gatoX && comidaX < gatoX + ANCHO_GATO && comidaY + ALTURA_COMIDA > gatoY && comidaY < gatoY + ALTURA_GATO) {
        aparecerComida();
        puntaje = puntaje + 1;
        tiempo = tiempo + 5;
        mostrarEnSpan("puntos", puntaje);  
                
    }
}

function aparecerComida() {
    comidaX=generarAleatorio(0,canvas.width - ANCHO_COMIDA);
    comidaY=generarAleatorio(0,canvas.height - ALTURA_COMIDA);
}


function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);
    if (tiempo === 0) {
        alert("GAME OVER. PUNTAJE FINAL: " + puntaje);
        clearInterval(intervaloTiempo);
    }   else {
        if (puntaje === 6) {
            alert("GANASTE! PUNTAJE FINAL: " + puntaje);
        }
    }
}
function reiniciarJuego() {
    limpiarCanvas();
    gatoX = canvas.width / 2 - ANCHO_GATO / 2;
    gatoY = canvas.height /2 - ALTURA_GATO / 2;
    iniciarJuego();
    tiempo = 11;
    puntaje = 0;
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
}