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
 * Para filtrar se necesita un array yuna condicion
 * que será una funcion
 * persona.filter(condicion que es una fn)
 * Donde filter hara un llamado a la funcion al iterarla
 */

esAlta = (persona) => persona.altura >=1.8
esAlta2 = ({altura}) => altura >=1.8

var personasAltas = personas.filter(esAlta2)
// Ahora personasAltas es un array con la evaluacion
// en el array de la condicion

/** En internet tambien se encuentra de la 
 * siguiente manera: 
 * No se llama a una funcion sino que se cre la funcion de una
 * Es mas prolijo la funcion por separado pero ambas funcionan
*/
var personasBajas = personas.filter( function(persona){
    return persona.altura < 1.75
})

/// RETO: EScribir filtrado persona bajas: ARRIBA YA EStÁ