/**
 * Como funciona eltiempo en Js:
 * En principio, cualquier tarea que se haya delegado al navegador a través
 * de un callback, deberá esperar hasta que todas las instrucciones del 
 * programa principal se hayan ejecutado. Por esta razón el tiempo de 
 * espera definido en funciones como setTimeout, no garantizan que el
 * callback se ejecute en ese tiempo exactamente, sino en cualquier 
 * momento a partir de allí, sólo cuando la cola de tareas se haya
 * vaciado.
 * 
 * 
 */

console.log('a');

/** Se observa que se ejecutan secuencialmente
 * De manera síncrona cosas como:
 * Mostrar alerts,cambiar el dom, si se hacen request externos con
 * jquery y eso.
 */

/** si queremos que se ejecute un console en cierto tiempo  */
setTimeout(function () {
    console.log('b');
}, 2000)

// De la siguiente manera no se puede por que el log se ejecutará de una
setTimeout( console.log('d'), 2000)

/** Por tal se le pasa es una referencia a una función y no una ejecución 
 * Se pueden usar arrow functions
*/
setTimeout( () => {
    console.log('e');
},  2000)

/** Qué pasa ahora si queremos que esperen 0 segundos
 * Cuál aparecerá primero?
 */
setTimeout( () => {
    console.log('f');
},  0)

console.log('c');

/** EL ORDEN FUE:
 * a , d , c, f, b ,e
 * Lo cuál mostró que C aparecio primero que F,
 * Esto es porque la función pasada como referencia está en la 
 * cola de tareas. Se le dijo a JS que ejecute esta función, y 
 * la ponga en la lista. 
 * Luego que se termine toda la ejecución, osea al mostrar C, 
 * ahí si empieza la ejecución de la lista de tareas.
 * Por tal por eso luego muestra F, la cuál estará ejecutada inmediatamente
*/

/** Otro caso es que el setTimeout recibe una función y un delay
 * En este nuevo ejemplo se tendrá:
 */

setTimeout( () => console.log('H'), 2000)
// COMENTAR Y DESCOMENTAR ESTO PARAEJECUTAR LO OTRO
//for (var i= 0; i< 1000000000; i++) {
//}


/** La tarea que muestra la H, ya está lista para ejecutarse
 * pero el ciclo for le cuesta mucho al navegador y PC en terminarlo.
 * Pasaron 2 minutos, y aún nada, luego si la muestra al tiempo.
 * El delay del setTimeout es mínimo, ya que nada garantiza que el 
 * ciclo de ejecución se termine en ese tiempo. y no estemos bloqueando
 * el event loop.
 * 
 */
