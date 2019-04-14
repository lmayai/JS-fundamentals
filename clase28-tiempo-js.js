/**
 * Como funciona eltiempo en Js:
 * En principio, cualquier tarea que se haya delegado al navegador a través
 *  de un callback, deberá esperar hasta que todas las instrucciones del }
 * programa principal se hayan ejecutado. Por esta razón el tiempo de 
 * espera definido en funciones como setTimeout, no garantizan que el
 *  callback se ejcute en ese tiempo exactamente, sino en cualquier 
 * momento a partir de allí, sólo cuando la cola de tareas se haya
 *  vaciado.
 * 
 * 
 */

console.log('a');

/** Se observa que se ejecutan secuencialmente
 * De manera sincrona cosascomo
 * Mostrar alerts,cambiar el dom, si se hacen request externos con
 * jquery y eso.
 */

/** si queremos que se ejecute un console en cieto tiempo  */
setTimeout(function () {
    console.log('b');
}, 2000)

// De la siugiente manera no se puede por que el log se ejecutara de una
setTimeout( console.log('d'), 2000)

/** Por tal se le pasa es unareferencia a una funcion y no una ejecucion 
 * Se pueden usar arrow functions
*/
setTimeout( () => {
    console.log('e');
},  2000)

/** Quepasa ahora si queremos que esperen 0 segundos
 * Cual apareceran primero?
 */
setTimeout( () => {
    console.log('f');
},  0)

console.log('c');

/** EL ORDEN FUE:
 * a , d , c, f, b ,e
 * Lo cual mostro que C aparecio primero que F,
 * Esto es porque la funcion pasada como referencia esta en la 
 * cola de tareas. Se le dijo a JS que ejecute esta funcion, y 
 * la ponga en la lista. 
 * Luego que se termine toda la ejecucion, osea al mostrar C, 
 * ahi si empieza laejecucion de la lista de tareas.
 * Por tal por eso luego muestra F, la cual estará ejecutada inmediatamente
*/

/** Otro caso es que el setTimeout recibe una funcion y un delay
 * En este nuevo ejemplo se tendrá
 */

setTimeout( () => console.log('H'), 2000)
// COMENTAR Y DESCOMENTAR ESTO PARAEJECUTAR LO OTRO
//for (var i= 0; i< 1000000000; i++) {
//}


/** LA tarea que muestra la H, ya está lista para ejecutarse
 * pero elciclo for le cuesta mucho al navegador y PC en trminarlo.
 * PAsaron 2 minutos, y aun nada, luegi si la muestra al tiempo.
 * El delay del setTimeout es minimo, ya que nada garantiza que el 
 * ciclo de ejecucion se temrine en ese tiempo. y no estemos bloqueando
 * el event loop.
 * 
 */
