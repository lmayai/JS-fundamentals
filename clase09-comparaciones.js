// El igual sirve para asignar =
var x = 4;
var y = '4';

// Las comparacionesse hacen con 2 o 3 iguales ==
// Con la siguiente se compara el valor
console.log('x==y Si tienen mismo valor '+ (x==y))
// Con la siguiente se comparan valor y tipo!
console.log('x===y N0 tienen mismo valor y tipo '+ (x===y))

/** Las comparaciones entre variables retornan
 * TRUE
 * FALSE
 * - INtentar usar ===
 */

// COMPARACIONES CON OBJETOS
var sacha = {
    nombre : 'Sacha'
}

var otro = {
    nombre : 'Sacha'
}

console.log('PAra comparaciones de objetos');
// Al comparar objetos no son como primitivos. Ya que JS pregunta por la referencia
console.log('sacha==otro ',sacha==otro);  //FALSE
console.log('sacha===otro ',sacha===otro); //FALSE

/* Ahora si le asignamos a otraPersona la misma referencia de sacha
 * Si tendrían la misma referencia 
*/
var otraPersona = sacha;
console.log('sacha==otraPersona ',sacha==otraPersona);  //TRUE, ya que son el mismo obj en la RAM
console.log('sacha==otraPersona ',sacha===otraPersona);  //TRUE


/** Si ahora hacemos lo siguiente */
var otraPersona2 = {
    ...sacha //Se desglosa
}
//Pero sigue dando diferente por que es un nuevo objeto
console.log('sacha==otraPersona2 ',sacha==otraPersona2);  //FALSE, ya que son otros obj en la RAM
// Es otro lugar de memoria, por eso es falso

/** PEROOO, si ahora se modifica el nombre dentro de otro
 * Debido a que otra persona esta apuntando al mismo de sacha
 * Se modifica el nombre de sacha
 */
otraPersona.nombre = 'Pepe'
console.log(sacha) //{nombre: "Pepe"}

otraPersona2.nombre = 'Juancho'
console.log(sacha) //{nombre: "Pepe"} no cambió a juancho, no apuntan al mismo

/*
Boolean:  // false/true
Null:  // nulo o "vacío"
Undefined: // Cuando una variable es declarada pero aún no tiene un valor asignado 
Number: // 383839
String:  // "esto es una string"```
*/



