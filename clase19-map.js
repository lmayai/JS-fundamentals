/** 
 * MAP a diferencia de filter devuelve un nuevo array
 * pero esta vez modificado.
 * En este ejemplo se modificará la altura de metros a cm 
 *
 */

var martin = {
    nombre: 'Martin',
    apellido: 'Miranda',
    edad: 10,
    altura: 1.70,
    unidad: 'm'
}

var karen = {
    nombre: 'Karen',
    apellido: 'Cano',
    edad: 50,
    altura: 1.63,
    unidad: 'm'
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Barros',
    edad: 20,
    altura: 1.80,
    unidad: 'm'
}

var juan = {
    nombre: 'Juan',
    apellido: 'Ortiz',
    edad: 30,
    altura: 1.92,
    unidad: 'm'
}

var santi = {
    nombre: 'Santi',
    apellido: 'Velez',
    edad: 40,
    altura: 2,
    unidad: 'm'
}

var personas2 = [juan,santi];
var personas = [martin,karen,pedro];


esAlta = ({altura}) => altura >=1.8

const personasAltas = personas.filter(esAlta)

const pasarAlturaACm= (persona) => {
    persona.altura *= 100 
    persona.unidad = 'cm'
    return persona
}

/** Se le pone función donde se usará el map */
var personasEnCm = personas.map(pasarAlturaACm)

/**
 * Ahora el inconveniente es que se modificó el array original personas
 * Lo que se debe hacer es retornar un nuevo objeto con la altura modificada.
 * Se retorna un objeto nuevo con la persona desglosada.
 * por tal son objetos diferentes y son objetos en memoria diferentes
 */

const pasarAlturaACm2= (persona) => {
    return {
        ...persona,
        altura:  persona.altura * 100,
        unidad: 'cm'
    }
}

/** Se le pone función donde se usará el map */
var personasEnCm2 = personas2.map(pasarAlturaACm2)


/** Tambipén es posible devolver el objeto del arrow function 
 * de forma diferente 
 * Y es retornar entre llaves un objeto, y esas llaves dentro de paréntesis
*/
const pasarAlturaACm3= (persona) => ({
    ...persona,
    altura:  persona.altura * 200,
    unidad: 'cm'
})
