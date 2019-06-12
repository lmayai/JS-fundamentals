/**
 * Programa que imprima muútiples personajes, y que esos request sean en paralelo
 */

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const options ={ crossDomain:true }

const onPeopleResponse = function (persona){
    console.log(`FUN: Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url , options , onPeopleResponse)
}

obtenerPersonaje(1) // Luke
obtenerPersonaje(2) // R2-D2
obtenerPersonaje(3) // C-3PO
obtenerPersonaje(4) 
obtenerPersonaje(5) 
obtenerPersonaje(6)

/** El orden en que llegan es: ALEATORIO 
 * No depende del orden de llamada, debido al asincronismo
 * ya que no es posible saber cuando responderá.
 * El asincronismo es evidente debido a la respuesta del server que es desconocida
 * Por tal el orden en que se pide no depende del orden que llega
*/

