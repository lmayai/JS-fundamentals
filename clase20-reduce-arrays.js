/** REDUCE_ muy comun
 * Lo que hace es reducir un array a un unico valor!
 */

var martin = {
    nombre: 'Martin',
    apellido: 'Miranda',
    edad: 10,
    altura: 1.70,
    unidad: 'm',
    cantidadLibros: 5
}

var karen = {
    nombre: 'Karen',
    apellido: 'Cano',
    edad: 50,
    altura: 1.63,
    unidad: 'm',
    cantidadLibros: 20
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Barros',
    edad: 20,
    altura: 1.80,
    unidad: 'm',
    cantidadLibros: 25
}

var juan = {
    nombre: 'Juan',
    apellido: 'Ortiz',
    edad: 30,
    altura: 1.92,
    unidad: 'm',
    cantidadLibros: 30
}

var santi = {
    nombre: 'Santi',
    apellido: 'Velez',
    edad: 40,
    altura: 2,
    unidad: 'm',
    cantidadLibros: 55
}


var personas = [martin,karen,pedro,juan,santi];

// EJM: Sacar la cuenta total de cuantos libros hay

/* Opcion 1: con ciclo for 
*/
var acum= 0;

for (let i = 0; i < personas.length; i++) {
    acum += personas[i].cantidadLibros;
}

console.log(`La cantidad de libros total es ${acum}`)

/*
 * Opción 2: Usar reduce
 * .reduce(reducer,0 );
 * Se tiene el reducer, y el valor inicial del acumulador que será 0
 * Reducer es una funcion
 * const reducer = (acum, cada_elemento)
*/

const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros
const reducer2 = (acum, persona) => {
    return acum + persona.cantidadLibros
}

var totalLibros = personas.reduce(reducer,0);
console.log(`La cantidad de libros total es ${totalLibros}`)




