/**
 * Cómo funciona el asincronismo
 * 1. JS solo puede hacer una cosa a la vez, solo una tarea.
 * A pesar que solo hace una tarea a la vez, no es multitarea,
 * puede delegar funciones a diferentes process
 * Este modelo de concurrencia se llama EVENT LOOP
 * 
 * 2. La pila de ejecución call stack va agrupando
 * las llamadas a ejecuciones según el orden de ejecución del programa
 * 
 * 3. Si una función lama a otra, esta se agrega a la pila
 * luego que ese termina de ejecutar, saca la tarea de la pila y la bota
 * 
 * 4. En algún momento de nuestro programa queremos obtener informacion,
 * existe info que no es inmediata, por tal se tiene que esperar una respuesta. 
 * Cuando la repuesta esté lista, se ejecutará algo más.
 *  
 * 5. Eso que se llama luego que se ejecuta una tarea, se llama callback 
 * y mientras tanto Js seguirá ejecutando el programa ppal.
 * 
 * 6. Luego que llegue la respuesta, la función a ejecutar paro a otro lado.
 * que se llama cola de tareas. donde se encolan según el orden de llegada
 * 
 * 7. Las tareas que paran aquí son: petición a servidores,
 * la interacciones visuales,y los eventos ejecutados cada cierto tiempo
 * 
 * 8. Luego cuando el programa termine de ejecutar sus tareas principales,
 * va a buscar a la pila de tareas. Por tal si Js hace tareas muy pesadas, las de 
 * la pila de tareas no se van a ejecutar, osea demorará mucho
 * 
 * 9. NO VOY A BLOQUEAR EL EVENT LOOP
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