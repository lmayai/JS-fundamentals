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

var personas = [martin,karen,pedro,juan,santi];

/** Vamos a filtrar
 * Para filtrar se necesita un array y una condición
 * que será una función
 * persona.filter(condición que es una fn)
 * Donde filter hará un llamado a la función al iterarla
 */

esAlta = (persona) => persona.altura >=1.8
esAlta2 = ({altura}) => altura >=1.8

var personasAltas = personas.filter(esAlta2)
// Ahora personasAltas es un array con la evaluación
// en el array de la condición

/** En internet también se encuentra de la 
 * siguiente manera: 
 * No se llama a una función sino que se cre la función de una
 * Es mas prolijo la función por separado pero ambas funcionan.
*/
var personasBajas = personas.filter( function(persona){
    return persona.altura < 1.75
})

/// RETO: EScribir filtrado persona bajas: ARRIBA YA ESTÁ