/**
 * Para entender el asincronismo, es vital entender que
 * es posible enviar funciones como parámetros.
 * EJM: cada vez que saludamos, respondemos al saludo
 */

class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    /**
     * Al saludar de la persona, vamos a recibir una fn
     */
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if (fn){ //Si nos pasan una función como parámetro, se llama
            fn(this.nombre,this.apellido,null) // En vez de null se puede enviar algo falso como FALSE
        }
    }
    soyAlto(){
        return this.altura>=1.8
    }

}

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
 
    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        // Lo anterior es esquivalente a:
        var {nombre,apellido}= this
        console.log(`Hola soy desarrollador y me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah no sabia que eras dev`)
    }
}

var sacha = new Persona('Sacha','Diaz',1.6)
var juan = new Persona('Juan','Diaz',1.8)
var arturo = new Desarrollador('Arturo','Peréz',1.9)

sacha.saludar()
juan.saludar(responderSaludo)
arturo.saludar(responderSaludo)


/**
 * Los valores FALSOS de Js son:
 * false
 * 0
 * null
 * ""
 * undefined
 * NaN
 * TODO los otro es true como
 * []
 * {}
 * "cosa"
 * y otrooos
*/

