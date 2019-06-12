/**
 * Encadenar varias promesas como se hacía con los callback
 * y ver como queda más limpio
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options ={ crossDomain:true }

function obtenerPersonaje(id){
    return new Promise((resolve,reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $
        .get( url,options, (data) => {
            resolve(data)
        })
        .fail( () => {
            reject(id)
        })
    })
}

function onError (id) {
    console.log(`Error con el ID: ${id}`)
}

/**
 * Ahora para que haya una promesa, esta se retorna.
 * En el método then, vamos a devolver una promesa
 */
obtenerPersonaje(1)
    .then( (personaje1) => {
        console.log(`Hola, soy ${personaje1.name} con ID 1`)
        return obtenerPersonaje(2) 
    })
    .then( (personaje2) => {
        console.log(`Hola, soy ${personaje2.name} con ID 2`)
        return obtenerPersonaje(3) 
    })
    .then( (personaje3) => {
        console.log(`Hola, soy ${personaje3.name} con ID 3`)
        return obtenerPersonaje(4) 
    })
    .then( (personaje4) => {
        console.log(`Hola, soy ${personaje4.name} con ID 4`)
        return obtenerPersonaje(5) 
    })
    .then( (personaje5) => {
        console.log(`Hola, soy ${personaje5.name} con ID 5`)
        return obtenerPersonaje(6) 
    })
    .then( (personaje6) => {
        console.log(`Hola, soy ${personaje6.name} con ID 6`)
        return obtenerPersonaje(7) 
    })
    .then( (personaje7) => {
        console.log(`Hola, soy ${personaje7.name} con ID 7`)
    })
    .catch( id => onError(id))
    //.catch(onError)

/**
 * Las promesas se encadenan, y queda mucho más legible
 */