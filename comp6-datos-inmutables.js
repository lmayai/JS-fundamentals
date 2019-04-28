/**
 * DATOS INMUTABLES
 * 
 */

const juan ={
    nombre:'Juan',
    apellido:'Peréz',
    edad:20
}

const cumple = person => person.edad++

/**
 * Esos son efectos de lado, o side effects, lo que hacen
 * Es que se modifican parametros dentro de las funciones.
 * ESTO SE DEBE EVITAR
*/

/**
 * Con lo siguiente se está creando un objeto en memoria
 * Por tal no se modificael original, sino una copia
*/
const cumpleInmutable = persona => ({
    ...persona, //SE DESGLOSAN EN UN NUEVO OBJETO
    edad: persona.edad +1
})

/**
 * Se observa que el original no se modifica solo la copia.
 * La desventaja es que el objeto sedebio copiar
 */
juan21 = cumpleInmutable(juan)
juan22 = cumpleInmutable(juan21)

console.log(juan)
console.log(juan21)
console.log(juan22)

/**
 * SE SUGIERA USAR DATOS INMUTABLES
 * Para si evitar efectos de lado (side-effects)
 */