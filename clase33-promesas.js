/**
 * PROMESAS
 *  Las promesas tienen tres estados:
 * pending
 * fullfilled
 * rejected
 * 
 * Se crea así:
 * new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
    if( todoOK ) {
        // -- se ejecutó el llamado exitosamente
        resolve()
    } else {
        // -- hubo un error en el llamado
        reject()
    }
  }).then(valor=> {})
    .catch(err=>{})
 */

/**
 * El problema de los callbaks es que el código se vuelve ilegible
 * Debido a esto nacieron las promesas:
 * Ahora la mayoria de los browser soportan las promesas. Se puede identificar si el navegador la soporta con pollyfind
 * Las promesas se piensas como valores que aún no conocemos.
 * Tienen 3 estados
 * 1. Pending
 * 2. Pasa a fullfild Si se resuelve
 * 3. Si falla pasa a reject.
 * Para obtener el valor de la promesa se llama a .then(val => ...)
 * Si hay error pasa a .catch(err=>)
 * 
 * Luego de pasar al estado de fullfiled, se puede llamar a otra promesa
 * Para llamar a sucesivas acciones sucesivas
 */

/**
 * Ahora se cambiará el método obtenerPersonaje para que retorne una promesa
 * en vez de recibir un callback como parámetro.
 * Cuando se ejecute la función debida a la promesa, ahi se llamará
 * al rejecto al resolve
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options ={ crossDomain:true }

function obtenerPersonaje(id){
    return new Promise( (resolve,reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $
         .get(url , options , function (data){
            resolve(data)
         })
         .fail(() => {
            reject(id)
         }) 
    })
}

function onError (id){
    console.log(`Error con el ID: ${id}`)
}

/**
 * EL .then se llamará cuando la promesa se resuelva
 * por tal el personaje es la data enviada por el resolve
 * y el ID es el enviado por el reject
 */
obtenerPersonaje(1)
    .then(function (personaje){
        console.log(`Hola, soy ${personaje.name} con ID 1`)
    })
    .catch(onError)







