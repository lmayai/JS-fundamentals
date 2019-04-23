/**
 * PAra gestionar las promesas múltiples en paralelo, 
 * vamos a generar un array con múltiples promesas, cada elemento es 
 * una promesa
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

var ids = [1,2,3,4,5,6,7]

/* Es lo mismo que con arrow function
var promesas = ids.map( function (id){
    return obtenerPersonaje(id)
} )
*/
var promesas = ids.map( id => obtenerPersonaje(id))
/** AL usar maps, para recorrer cada elemento
 * En la consola se ve una rray de promesas
 *  (7) [Promise, Promise, Promise, Promise, Promise, Promise, Promise]
    0: Promise {<pending>}
    1: Promise {<pending>}
    2: Promise {<pending>}
    3: Promise {<pending>}
    4: Promise {<pending>}
    5: Promise {<pending>}
    6: Promise {<pending>}
        length: 7
 */

/** Para obtenerlos valores 
 * con all se pasa un array de promesas
 * en el then se obtiene un arreglo de personajes.
 * Luego queda mucho mas legible ya que se llaman en paralelo
*/
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

/** 
 * Se obtiene un arreglo de promesas resueltas
   (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
    0: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
    1: {name: "C-3PO", height: "167", mass: "75", hair_color: "n/a", skin_color: "gold", …}
    2: {name: "R2-D2", height: "96", mass: "32", hair_color: "n/a", skin_color: "white, blue", …}
    3: {name: "Darth Vader", height: "202", mass: "136", hair_color: "none", skin_color: "white", …}
    4: {name: "Leia Organa", height: "150", mass: "49", hair_color: "brown", skin_color: "light", …}
    5: {name: "Owen Lars", height: "178", mass: "120", hair_color: "brown, grey", skin_color: "light", …}
    6: {name: "Beru Whitesun lars", height: "165", mass: "75", hair_color: "brown", skin_color: "light", …}
    length: 7
 */
