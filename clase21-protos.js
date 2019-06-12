/**
 * CUANDO SE HABLA DE OBJ EN JS SE HABLA MAS DE PROTOTIPOS QUE DE CLASES.
 * Las clases terminan siendo prototipos
 * 1. primero se definirá un protiipo
 * 2. el objeto se crea usando new, según el prototipo
 * 3. this hace referencia al objeto que se acaba de construir
 * 4. Ese ojeto this que se crea no tiene atributos, por tal se llenan
 * 5. implicitamente se retorna el this
 * 6. Para implementar la función saludar, se le puede decir al prototipo
 *    Dentro del proto, existe un atributo saludar, que será una función   
 */

function Persona(nombre,apellido){
    console.log('Me ejecutaron')
    this.nombre = nombre
    this.apellido =apellido
    this.edad = 20 //Todos los objetos persona dentran 20
    //implícitamente se retorna el this return this.
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

/**
 * New es una palabra reservada para crear nuevos objetos pasados en prototipos
 * La palabra new 
*/ 
var sacha = new Persona('Sacha','Diaz')
sacha.saludar()

//Cada uno de estos guarda dentro de this esos valores
var erika = new Persona('Erika','Gomez')
var pedro = new Persona('Pedro','Aguirre')

//******************************************++ */
/**
 * Sin usar new, se crea un objeto y se asigna a los atributos de un objeto
 * ESTO ESTA MAL ESCRITO, por mas que funcione
 */
function Persona2(nombre,apellido){
    obj ={}
    obj.nombre = nombre
    obj.apellido =apellido
    return obj
}
var sacha2 = Persona2('Sacha','Diaz')

//RETO: Agregar el atributo altura dentro del constructor y 
// agregar la función de decir si es alta o no, mas de 1.8 metros

function Persona3(nombre,apellido,altura){
    this.nombre= nombre
    this.apellido = apellido
    this.altura = altura
}

Persona3.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

const esAlto = ({altura}) => altura >=1.8 

Persona3.prototype.mensajeAltura = function() {
    if (esAlto(this)){
        console.log(`SI soy alto, mido ${this.altura} metros`)
    }else{
        console.log(`NO soy alto, mido ${this.altura} metros`)
    }
}

var david = new Persona3('David','Maya',1.7)
var carlos = new Persona3('Carlos','Maya',1.6)
var andres = new Persona3('Andres','Maya',1.9)
var camilo = new Persona3('Camilo','Maya',2)

david.mensajeAltura()
carlos.mensajeAltura()
andres.mensajeAltura()
camilo.mensajeAltura()