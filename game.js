const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }

    inicializar(){
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste: celeste,
            // Tambien se puede hacer lo siguiente cuando se asgian al objeto del mismo nombre
            violeta,
            naranja,
            verde
        }
    }

    //Arreglo de 10 ceros y luego se llenan de una valor entre cero y 4 redondeado
    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4) )
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }

    transformarNumeroAColor(numero){
        switch(numero){
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout( ()=> this.apagarColor(color),350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    iluminarSecuencia(){
        for(var i = 0; i<this.nivel;i++){
            const color = this.transformarNumeroAColor(this.secuencia[i]) //Si se declara color no dda, debe ser un let o un const, para que no se pisen las variables y si se modifiquen
            setTimeout( () => this.iluminarColor(color), 1000*i ) // Se llama cada segundo cada color
        }
    }

}

function empezarJuego(){
    window.juego = new Juego()
}