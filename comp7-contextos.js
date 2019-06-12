/**
 * CONTEXTOS; QUIEN ES EL OBJETO THIS.
 * Error muy común no saber quien es el this
 * Como cambiar los contextos de las funciones
*/

const juan = {
    nombre : 'Juan',
    apellido: 'Peréz',
}



// En este caso this hace referencia la window
function saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`)
}
saludar() //Hola mi nombre es undefined

/**
 * Como cambiar el this de la función.
 * USANDO BIND se cambia el contexto de la función
 * por tal se asignó el contexto a juan.    
 * bind devueve la función atandolo al this.
 */
const saludarJuan = saludar.bind(juan) 
saludarJuan() //Hola mi nombre es Juan


const jessi = {
    nombre : 'Jessi',
    apellido: 'Peréz',
}

/**
 * Asi se ata a otro
 */
const saludarJessi = saludar.bind(jessi) 
saludarJessi()

/**
 * Se retorna una nueva función con el this en juan
 */
setTimeout(saludar.bind(juan), 1000)

function saludar2(saludo='Hola'){ //Por defecto Hola
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}
// Con el siguiente se muestra como se pasan parámetros con el bind
//Primer parámetro es this y los otros son de la función.
setTimeout(saludar2.bind(juan,'Hola Che'), 1000)

/**
 * BIND no ejecuta la función solo cambia el contexto
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










