// Paso de Objetos por referencia o por Valor

var jaimito = {
    nombre: 'Jaimito',
    apellido: 'Aguirre',
    edad: 25
}   

var dario = {
    nombre: 'Dario',
    apellido: 'Diaz',
    edad: 24
}

function imprimirNombre(persona){
    var { nombre } = persona
    console.log('Nombre: ', nombre.toUpperCase())
}
imprimirNombre(dario);

/** PASOS POR REFERENCIA O POR VALOR */
// Al pasar el objeto persona, cada vez que se llame a cumple() la edad irá aumentando
function cumple(persona){
    persona.edad += 1;
}

cumple(dario); //Edad: 25
cumple(dario); //Edad: 26
cumple(dario); //Edad: 27
/**
 * ESto significa que los objetos que se pasan a una función 
 * y se cambian dentro de la función se verán modificadas dentro de esta.
 * --- Los objetos se comportan diferentes
 */ 

/** Para que no se alteren los parámetros se hace lo siguiente
 * Se retorna un nuevo ejemplo
 */
function cumple2(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
    persona.edad += 1;
}

// Por tal se retorna una persona más vieja, pero no se altera el elemento
cumple2(dario);     //Retorna: {nombre: "Dario", apellido: "Diaz", edad: 28}
console.log(dario)  //Retorna: {nombre: "Dario", apellido: "Diaz", edad: 27}

var darioMasViejo = cumple2(dario);
console.log(darioMasViejo); //Retorna: {nombre: "Dario", apellido: "Diaz", edad: 28}
console.log(dario);         //Retorna: {nombre: "Dario", apellido: "Diaz", edad: 27}

/****** Por tal toca tener previsto si se quiere o no esos objetos pasados como parámetros. */





