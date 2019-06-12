/**
 * JS no soporta la herencia por que no soporta las clases,
 * no existe un sistema que se herede de otro.
 * Existe la herencia prototipal
 * Crear un prototipo hijo, ejm: desarrollador
 * Si en el hijo no responde al método, va y busca al padre del objeto,
 *  y va subiendo la cadena subiendo entre objetos 
 * padres hasta llegar al prototipo Object
 */

/**
 * Se le dice al prototipo hijo quién será su prototipo padre
 * Con lo siguiente se genera la herencia
 */
function heredaDe(prototipoHijo,prototipoPadre){
    var fn = function () {} //Dummy funcion
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido =apellido
    this.altura =altura
}

// Aqui es donde se modifica el prototipo
Persona.prototype.saludar =  function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura >=1.8
}

/** Crear un nuevo tipo de persona, un proto DESARROLLADOR 
 * Ahora, como se hace pa que desarollador haga la herencia prototipal
 * de saludar y soyAlto, se crea primero una funcion nuestra
 * 
*/
function Desarrollador(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function (){
    console.log(`Hola soy desarrollador y me llamo ${this.nombre} ${this.apellido}`)
}

// Se pone encima de los métodos
//heredaDe(Desarrollador,Persona)

/*
var sacha = new Persona('Sacha','Diaz',1.72)
var erika = new Persona('Erika','Gomez',1.65)
var pedro = new Persona('Pedro','Aguirre',1.8)
*/

/**
 * Si ahora se llama a un objeto creado del prototipo Desarrollador
 * El método saludar va al padre, no al hijo
 * Esto es por que el mecanismo de herencia se llamó luego
 * de definir el proto de saludar del desarrollador
 */

/**
 * Al mirar en el inspector Persona.prototype
 * Se muestra un objeto con sus atributor que son
 * saludar: es una funcion
 * soyAlto: es una funcion
 * constructor: funcion PErsona(nomre,apellido,altura)
 * __proto_: OBject
 * El cual apunta al prototipo Object, donde termina 
 * la cadena de herencia del proto.
 * Persona.prototype
    {saludar: ƒ, soyAlto: ƒ, constructor: ƒ}
    saludar: ƒ ()
    soyAlto: ƒ ()
    constructor: ƒ Persona(nombre,apellido,altura)
    __proto__: Object
 */

/**
 * Luego si se mira en el inspector a Desarrollador.protoype
 * Se muestra
 * Persona {constructor: ƒ, saludar: ƒ}
    constructor: ƒ Desarrollador(nombre,apellido)
    saludar: ƒ ()
    __proto__:
        saludar: ƒ ()
        soyAlto: ƒ ()
        constructor: ƒ Persona(nombre,apellido,altura)
        __proto__: Object
 * Si ahora se llama al objeto de desarrollador
 * arturo.soyALto, el primero busca en desarrollador y luego busca en su prototipo padre,
 * recorre los padres hasta que lo encuentre
 */

/**
 * COMO RESUMEN:
 * La herencia no existe, no existen clase, existen prototipos
 * Luego al buscar un atributo se irá buscando entre sus padres 
 * hasta llegar a object. Si no está en ningun prototipo del cual fue heredado
 * ahí si se lanza un error.
 */
