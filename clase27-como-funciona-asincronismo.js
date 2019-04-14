/**
 * COmo funciona el asincronismo
 * 1. JS solo puedehacer una cosa a la vez, solo una tarea.
 * A pesar que solohace una tarea a la vez, no es multitarea,
 * puede delegar funciones a diferentes proces
 * Este modelo de concurrencia se llama EVENT LOOP
 * 
 * 2. La pila de ejecucion call stack va agrupando
 * las llamadas a ajecuciones segun el orden de ejecucion del programa
 * 
 * 3. Si una funcion lama a otra, esta se agrega a la pila
 * luego que sse termina de ejecutar, saca la tarea de la pila y la bota
 * 
 * 4. EN algun momento de nuestro programa queremos obtener informacion,
 * existe infoque no esinmediata, portal se tiene que espear una respues. 
 * Cuando la repuesta este lista, se ejecutara algo mas.
 * 
 * 5.Eso que se llama luego que se ejecuta una tarea, se llama callback 
 * y mientras tanto Js seguira ejecutando el programa ppal.
 * 
 * 6. Luego que llegue la respuesta, la funcion a ejecutar paro a otro lado.
 * que se llama cola de tareas. donde se encolan segun el orden de llegada
 * 
 * 7. Las tareas que paran aqui son: peticion a servidores,
 * la interacciones visuales,y los eventos ejecutados cada cierto tiempo
 * 
 * 8. Luego cuando el programa termine de ejecutar sus tareas pplaes,
 * va a buscar a la pila de tareas. Portal si Js hace tareas muy pesadas, las de 
 * la pila de tareas no se van a ejecutar, ose demorara mucho
 * 
 * 9. NO VOy A BLOQUEAR EL EVENT LOOP
 * 
 * JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar 
 * la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia 
 * se llama EventLoop.
 * JavaScript delega en el navegador ciertas tareas y les asocia funciones 
 * que deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks,
 * y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa 
 * a la cola de tareas para ser ejecutado una vez que JavaScript haya terminado todas 
 * las instrucciones que están en la pila de ejecución.
 * Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando 
 * procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran tardar 
 * demasiado en ejecutarse.
 * 
 */