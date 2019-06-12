/**
 * Manejo de errores de callbacks
 * Para solucionar el problema de quedarnos sin 
 * conexión, u otro error similar, en medio de una 
 * sucesión de callbacks utilizamos el método fail().
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options ={ crossDomain:true }

/**
 * El metodo .fail() también tiene un callback si es que
 * hay un error en la petición. 
 * Si falla el personaje 3, falla y no se siguen ejecutando los otros
 * 
 */
function obtenerPersonaje(id,callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
     .get(url , options , callback)
     .fail(() => {
        console.log('No se pudo obtener el personaje' ,id)
     }) 
}

obtenerPersonaje(1,function (personaje, responseText, xhrReq){
    console.log(`Hola, soy ${personaje.name}`)

    obtenerPersonaje(2,function(personaje){
        console.log(`Hola, soy ${personaje.name}`)

        obtenerPersonaje(3,function(personaje){
            console.log(`Hola, soy ${personaje.name}`)

            obtenerPersonaje(4,function(personaje){
                console.log(`Hola, soy ${personaje.name}`)

                obtenerPersonaje(5,function(personaje){
                    console.log(`Hola, soy ${personaje.name}`)
 
                    obtenerPersonaje(6 , function(personaje) {
                        console.log(`Hola, soy ${personaje.name}`)

                    })

                })
            })
        })
    }) 
})  
