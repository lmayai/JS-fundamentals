var martin = {
    nombre: 'Martin',
    apellido: 'Miranda',
    edad: 10,
    altura: 1.70
}

var karen = {
    nombre: 'Karen',
    apellido: 'Cano',
    edad: 50,
    altura: 1.63
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Barros',
    edad: 20,
    altura: 1.80
}

var juan = {
    nombre: 'Juan',
    apellido: 'Ortiz',
    edad: 30,
    altura: 1.92
}

var santi = {
    nombre: 'Santi',
    apellido: 'Velez',
    edad: 40,
    altura: 2
}


/** Si se quisiera agrupar todos los anteiores 
 * objetos dentro de funciones.
 * Se hace un array []
 */

var personas = [martin,karen,pedro,juan,santi]
// juan es: persona[3] -> para acceder a la altura

// ACCEDER A ELEMENTOS: Ambas son equivalentes
var alturaJuan = personas[3].altura
var alturaJuan2 = personas[3]['altura']

//Ahora para recorrer el array
for(var i = 0; i<personas.length; i++) {
    console.log( `${personas[i].nombre} mide ${personas[i]['altura']} metros`)
    /** Tamien se puede hacer así
     *  var persona = personas[i]
     *  console.log( `${persona[i].nombre} mide ${persona[i]['altura']} metros`)
    */ 
}

