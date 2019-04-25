const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 10
class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        setTimeout(()=>{
            this.siguienteNivel()
        },500)
    }

    inicializar(){
        // Tambien se puede atar de la siguiente forma
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this) //Evitar que cambie el contexto de this
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
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4) )
    }

    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
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

    transformarColorANumero(color){
        switch(color){
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
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

    /**
     * Usando bind es posible enlazar el this referente al objeto creado en la clase
     * Usando.bind(this) -- Se trata de decir que se le asigne el this
     * Se tiene que poner ya que el this que se invia sería el botón y no el objeto
     */
    agregarEventosClick(){
        var self = this
        /**
         * Se ponen asi si antes no se pone que: this.elegirColor = this.elegirColor.bind(this)
         this.colores.celeste.addEventListener('click',this.elegirColor.bind(this))
         this.colores.violeta.addEventListener('click',this.elegirColor.bind(self))
         this.colores.naranja.addEventListener('click',this.elegirColor.bind(this))
         this.colores.verde.addEventListener('click',this.elegirColor.bind(this))
         * Como ya se asingó, entonces se ponen si los bind
        */
        this.colores.celeste.addEventListener('click',this.elegirColor)
        this.colores.violeta.addEventListener('click',this.elegirColor)
        this.colores.naranja.addEventListener('click',this.elegirColor)
        this.colores.verde.addEventListener('click',this.elegirColor)
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click',this.elegirColor)
        this.colores.violeta.removeEventListener('click',this.elegirColor)
        this.colores.naranja.removeEventListener('click',this.elegirColor)
        this.colores.verde.removeEventListener('click',this.elegirColor)
    }

    /**
     * Los manejadores de eventos se llaman con el parametro event.
     * Perderá e contexto un poco JS. 
     * Ahora this es el boton al que se llama. Es quien dispara el evento
     */
    elegirColor(event){
        //console.log(this) // Primero this fue el botón, pero con el bind se enlaza al objeto this de la clase Juego
        //console.log(event) //En target se diferencia cual fue tocado. Y con dataSet el color
        // Con la prop en html data-color, se setea el dataSet dentro del evento
        // 1. Se mira el color que fue tocado
        const nombreColor = event.target.dataset.color
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++;
            if(this.subnivel===this.nivel){ //Pasa de nivel
                this.nivel++;
                this.eliminarEventosClick();
                if (this.nivel === (ULTIMO_NIVEL+1)){
                    //Ganó
                }else{
                    //Avanza nivel
                    //setTimeout( () => this.siguienteNivel() , 2000) 
                    //Tambien así, perdo cambia el this. por tal tocxa ponerlo con el bindthis
                    setTimeout( this.siguienteNivel, 1500) 
                    console.log('Avanza nivel' ,this.nivel)
                }
            } 
        } else{ //Si toco un número que no era
            //Perdió
            console.log(`Pierde en nivel ${this.nivel}`)
        }
    }

}

function empezarJuego(){
    window.juego = new Juego()
}