/**
 * Debido a que el orden de llegada no es posible 
 * saberlo, hay manera de hacerlo en orden. 
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options ={ crossDomain:true }

function obtenerPersonaje(id,callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    
    $.get(url , options , function (persona){
        console.log(`FUN: Hola yo soy ${persona.name}`)
        if (callback){
            callback()
        }
    })
}

/**
 * Si se pasa de la siguiente manera, se va a llamar 
 * indemdiatamente obtenerPersonaje2.
 * Incluso se llama primero la 2
 */
//obtenerPersonaje(1, obtenerPersonaje(2) )

/**
 * Debe llamarse es asi!
 * Ya que solo se llamara al finalizar la peticion, osea, con el callback
 * Debe ser una fn que no se esté ejecutando
 */
obtenerPersonaje(1,function (){
    obtenerPersonaje(2,function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5,function(){
        
                })
            })
        })
    }) // C-3PO
}) // Luke

/**
 * Las peticiones se hacen en SERIE y no en PARALELO
 * Esto se conoce como CALLBACK HELL
 */