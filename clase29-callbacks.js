/**
 * CALLBACKS!
 * 
 * 1. Usar requests a una API externa usando JQUERY
 * 2. Las APIS van a STARWRAS
 * 3. Se necesita descargar JQUERY, usarlo con un CDN(un content delivery network: servidor que tramitará el request)
 * AL escribir $ en la consola se ve que redirije a JQUERY
 * Se hacen peticiones a https://swapi.co/
 * 
 * Se usó JQUERY pero es posible usar XMLHTTPREQUEST por Js.
 */

/**
 * Para hacer el request es necesario lo siguiente
 * Se llama a $.get para peticiones GET
 * Param1: URL
 * Param2: OBject { crossDomain:true}
 * Param3: callback- Se tiene funcion anonima.
 *  La anonima retorna o puede retornar un success, y se llama cuando se termine la peticion
 * jQuery.get( url [, data ] [, success ] [, dataType ] ) 
 * Con console.log(arguments) se ven los argumentos de retorno
 * Lo de adentro del callback solo se va a ejecutar si la petición es exitosa!
 * dentro de function(data,aditions) -> data se refiere a arguments[0] aditions a arguments[1]
 * 
*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const luke_url = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const options ={ crossDomain:true }
$.get(luke_url , options , function(persona,suc){
    console.log(arguments) //Arguments es una var que tienen las funciones que retornan un array
    console.log(arguments[0]) // LA DATA COMPLETA CON EL OBJETO
    console.log(arguments[1]) // SUCCESS
    console.log(arguments[2]) // DAtos adicionales
    console.log(`Hola yo soy ${persona.name}: Peticion: ${suc}`)
})


// USANDO UN METODO NO ANÓNIMO SERÍA ASÍ
const onPeopleResponse = function (persona){
    console.log(`FUN: Hola yo soy ${persona.name}`)
}

$.get(luke_url , options , onPeopleResponse)