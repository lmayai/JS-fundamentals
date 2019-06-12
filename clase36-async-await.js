/**
 * Async-await es la manera más simple y clara de realizar 
 * tareas asíncronas. Await detiene la ejecución del programa 
 * hasta que todas las promesas sean resueltas. 
 * Para poder utilizar esta forma, hay que colocar async antes 
 * de la definición de la función, y encerrar el 
 * llamado a Promises.all() dentro de un bloque try … catch.
 * 
 * 
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
 * El AWAIT hace que se detenga la ejecución, hasta que todas
 * las promesas sean resueltan.
 * Para usar await, la función debe marcarse como ASYNC
 */
async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map( id => obtenerPersonaje(id))
    try {
        //Se le asigna el valor de una tarea asíncrona
        var personajes = await Promise.all(promesas)
        console.table(personajes)
    }catch(id){
        onError(id)
    }
}

obtenerPersonajes()

