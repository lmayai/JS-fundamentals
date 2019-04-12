/**
 * APARTIR DEL 2015 salio el ECMASCRIPT2015
 * Este es el etandar en el que se basa JS para consolidarse como lenguaje
 * Este tiene las funcionalidad del lenguaje.
 * Agrega manera simples de resolver el codigo, como en el tema
 * de las clases y la herencia prototipal.
 * POR TAL SIGUEN SIENDO PROTITPOS
 */

/**
 * RETOMANDO DE LA CLASE ANTERIOR, ahora se escribira asi
 * Existe una clase pesona, con un constructor definido
 */

class Persona {
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido =apellido
        this.altura =altura
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura >=1.8
    }
}


/**
 * Ahora como se hace que se herede de otra
 * Con extends, se dice que la clase extiende de PErsona
 * El error 
clase25-clases.js:38 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Desarrollador (clase25-clases.js:38)
    at <anonymous>:1:15
 * Donde no se puede usar this sin hacer referencia al super
 de la clase padre
 */
class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
        /** AHora ya si es posible acceder a this */
    }
    
    /* Asi no se puede acceder a this
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido =apellido
        this.altura =altura
    }*/

    saludar(){
        console.log(`Hola soy desarrollador y me llamo ${this.nombre} ${this.apellido}`)
    }
}



