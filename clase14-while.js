/** 
 * Repetir un código hasta cumplir una condición 
*/

// Cuántos días le lleva bajar 3 kilos?

var juan = {
    nombre: 'Juan',
    apellido: 'Peréz',
    edad: 25,
    peso: 75
}

const PESO_INCREMENTO = 0.3
const META = juan.peso - 3

const aumentarPeso = (persona) => persona.peso += PESO_INCREMENTO;
const quitarPeso = persona => persona.peso -= PESO_INCREMENTO; 
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.7
var dias = 0

//Se repite hasta que la condición se cumpla
while(juan.peso>=META){
    //debugger
    if ( comeMucho() ) { //come mucho, aumenta de peso
        aumentarPeso(juan)
    }else if( haceDeporte() ){ //Si hace deporte, adelgaza
        quitarPeso(juan)
    } 
    dias += 1;
}

console.log('Juan ', juan.peso.toFixed(1) + 'kg')
console.log(`Pasarron ${dias} dias para que baje hasta ${META} kilos`)