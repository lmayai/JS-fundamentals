/**
 * QUE PASA CON EL THIS DENTRO DE LAS ARROW FUNCTIONS
 * 
 */

function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido =apellido
    this.altura =altura
}

// Aqui es donde se modifica el prototipo
Persona.prototype.saludar =  ()  => {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

/**
 * Esto no puede escribirse como un arrow functions
 * Ya que el this para estas es otras cosas, OJO CON ESTO
 * Se observa que al mirar el objeto this, este hace referencia al WINDOW
 * Donde en window no hay un atributo altura.
 * Por tal es undefined y indefined no es mayor a 1.8
 * THIS es window, osea lo cambia. Apunta al this de afuera
 * This en el espacio global es window.
 * this === window -> es true
 * Por tal las arrow cambian quien es this
 */
Persona.prototype.soyAlto = () => {
    //debugger
    return this.altura >=1.8
}

// Por tal no se debe usar arrow functions 
Persona.prototype.soyAlto2 = function () {
    return this.altura >=1.8
}

var sacha = new Persona('Sacha','Diaz',1.72)
var erika = new Persona('Erika','Gomez',1.65)
var pedro = new Persona('Pedro','Aguirre',1.8)

/*
sacha.soyAlto2()
erika.soyAlto2()
pedro.soyAlto2()
*/
