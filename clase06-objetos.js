var nombre1 = 'Jaimito';
var nombre2 = 'Dario';

function imprimirNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase();
    console.log('Local: '+ nombre);
}

imprimirNombreEnMayusculas(nombre1);
imprimirNombreEnMayusculas(nombre2);
// Si se tienen que imprimir muchos nombres tocaría crear muchos var nombre;

/* Para no hacer esto se trabajan con objetos
 Las llaves definen y delimitan un OBJETO
 El objeto es una representacion abstracta de la realidad 
 El siguiente objeto tiene nombre, apellido, edad (SON ATRIBUTOS)
 Los objetos se determinan por CLAVE y VALOR
 */
var jaimito = {
    nombre: 'Jaimito',
    apellido: 'Aguirre',
    edad: 25
}   

var dario = {
    nombre: 'Dario',
    apellido: 'Diaz',
    edad: 24
}

imprimirNombreEnMayusculas(jaimito.nombre);
imprimirNombreEnMayusculas(dario.nombre);

/* Ahora las funciones pueden majear objetos completos */
function imprimirNombre(persona){
    console.log('Nombre: ', persona.nombre.toUpperCase())
}

imprimirNombre(dario)

/** 
 * Para la nueva version de ES se permite definir el parámetro que quiere recibirse de la función
 * Usando las llaves y dentro la clave que se quiere
 * Se usa así ya que el que se quiere es el atributo nombre
*/
function imprimirNombre2({nombre}){
    console.log('Nombre: '+nombre.toUpperCase())
}

imprimirNombre2(jaimito);

/** Tambien se puede definir los objetos dentro del parámetros que se pasarán a una función */
imprimirNombre2( {nombre:'Gabo'} );

/** Los siguientes llamados dan errores ya que no hay una definición del objeto */
// imprimirNombre2(); Esto da error ya que no existe un objeto
// imprimirNombre2({});
// imprimirNombre2({apellido:'Perez'});


