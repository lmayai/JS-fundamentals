const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
    }

    inicializar(){
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste: celeste,
            // Tambien se puede hacer lo siguiente
            violeta,
            naranja,
            verde
        }
    }

    //Arreglo de 10 ceros y luego se llenan de una valor entre cero y 4 redondeado
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4) )
    }
}

function empezarJuego(){
    window.juego = new Juego()
}