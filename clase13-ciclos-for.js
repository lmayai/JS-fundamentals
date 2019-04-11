/**
 * FOR: TAREAS REPETITIVAS
 */

var juan = {
    nombre: 'Juan',
    apellido: 'Peréz',
    edad: 25,
    peso: 75
}

console.log('Juan pesa al inicio', juan.peso+ 'kg')

const PESO_INCREMENTO = 0.2

var aumentarPeso = (persona) => persona.peso += PESO_INCREMENTO;
var quitarPeso = persona => persona.peso -= PESO_INCREMENTO; 

/** Conidicon, final e incremeto al finalizar
 * Va a contar el peso por los 365 dias del año
*/
for ( var i = 1; i<=365 ; i++ ){
    var pesoRan = Math.random()
    if (pesoRan<0.25){ //aumenta peso
        aumentarPeso(juan)
    }else if (pesoRan < 0.5){ //adelgaza
        quitarPeso(juan)
    }
}

console.log('Juan pesa al final', juan.peso.toFixed(1) + 'kg')
