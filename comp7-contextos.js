/**
 * CONTEXTOS; QUIEN ES ELL OBJETO THIS.
 * Error muy comun no saber quien es el this
 * COmO cambiar los contextos de las funciones
*/

const juan = {
    nombre : 'Juan',
    apellido: 'Peréz',
}



// En este casi this hace referencia la window
function saludar(){
    console.log(`HOla mi nombre es ${this.nombre}`)
}
saludar() //HOla mi nombre es undefined

/**
 * Como cambiar el this de la función.
 * USANDO BIND se cambia el contexto de la función
 * por tal se asignóel conexto a juan.
 * bind devueve la funcion atandolo al this.
 */
const saludarJuan = saludar.bind(juan) 
saludarJuan() //HOla mi nombre es Juan


const jessi = {
    nombre : 'Jessi',
    apellido: 'Peréz',
}

/**
 * Aspi se ata a otro
 */
const saludarJessi = saludar.bind(jessi) 
saludarJessi()

/**
 * Se retorna una nueva función con el this en juan
 */
setTimeout(saludar.bind(juan), 1000)

function saludar2(saludo='Hola'){ //Por defecto Hola
    console.log(`${saludo} mi nombrree es ${this.nombre}`)
}
// Con el siguiente semuestra como se pasan parámetros con el bind
//Primer parametro es this y los otros son de la fun.
setTimeout(saludar2.bind(juan,'Hola Che'), 1000)

/**
 * BIND no ejecuta la funcion solo cambia el contexto
 */

const pedro = {
    nombre : 'Pedro',
    apellido: 'Peréz',
}

/**
 * Con CALL se cambiael contexto y tambíen se llama
 */
console.log('*****C**************************')
saludar2.call(pedro, 'Hola pibe')
console.log('*******************************')

const jorge = {
    nombre : 'Jorge',
    apellido: 'Peréz',
}

/**
 * Con APPLY es como el call
 * Pero lo parametros se pasan en un array
 */
console.log('******************************')
saludar2.apply(jorge, ['Hola tu'])
console.log('*******************************')










