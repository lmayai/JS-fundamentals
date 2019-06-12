/**
 * Seguir viendo diferencias con el objeto normal 
 * de clase de otros lenguajes
 * El prototipo es un objeto mas de JS, si se modifica
 */

function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido =apellido
    this.altura =altura
}

// Aquí es donde se modifica el prototipo
Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

/**
 * Esto no puede escribirse como un arrow functions
 * Ya que el this para estas es otras cosas, OJO CON ESTO
 */
Persona.prototype.soyAlto1 = () => this.altura >=1.8
Persona.prototype.soyAlto2 = function () {
    return this.altura >=1.8
}

var sacha = new Persona('Sacha','Diaz',1.72)
var erika = new Persona('Erika','Gomez',1.65)
var pedro = new Persona('Pedro','Aguirre',1.8)

sacha.soyAlto1()
erika.soyAlto1()
pedro.soyAlto1()

/**
 * Al ejecutar esto se tendrá un error, ya que importa donde se 
 * coloque las funciones de los protos, por tal las funciones se ponen juntas
 * Por tal los prototipos se ponen arriba y no abajo.
 */
Persona.prototype.soyAlto = function() {
    return this.altura >=1.8
}
