# JS-fundamentals
Repo created to practice the basics of JS, based on course 'Fundamentos de Javascript de platzi'

### Simon-dice game: https://lmayai.github.io/JS-fundamentals/

## Variables
Las variables permiten almacenar información.

- La declaraciones de JS se hacen del siguiente modo
```js
var nombre;             //Es una variable undefined
nombre = 'Leoncito';    //Debido al contenido la variable se define como String
nombre = "Leoncito";
```
Al ser JS interpretado y dificilmente tipado, la variable al momento de ser asignada se le define un tipo. *nombre* es tipo **String**

- Las variables también pueden cambiar su tipo.
```js
var edad;        //undefined
edad = 10;       //number
edad = '10';     //string
```

- Para imprimir por consola en JS, se utiliza:
```js
console.log('Mi edad es: ' + edad );
```

- Los comnetarios se pueden hacer en una sola línea o en bloque:
```js
// Comentario de una sola línea
/*
 * Esto es un comentario en bloque.
*/
```

### Tipos de datos
Los 7 tipos de datos son:
- Seis tipos de datos que son primitivos:
    - **Boolean**. true y false.
    - **null**. Una palabra clave especial que denota un valor null. Como JavaScript es case-sensitive, null no es lo mismo que null, NULL, o cualquier otra variante.
    undefined. Una propiedad de alto nivel cuyo valor no es definido.
    - **Number**. 42 o 3.14159.
    - **String**. "Hola"
    - **Symbol** (nuevo en ECMAScript 6).
- y **Object**.

Para conocer el tipo de una variable se usa ***typeof***
```js
var miFuncion = new Function("5 + 2");
var forma = "redonda";
var largo = 1;
var hoy = new Date();
```
Los tipos serían :
```js
typeof miFuncion // devuelve "function"
typeof (forma)   // devuelve "string"
typeof largo     // devuelve "number"
typeof hoy       // devuelve "object"
typeof noExiste; // devuelve "undefined"
```
Las palabras true/false y null tienen estos tipos:
```js
typeof true; // devuelve "boolean"
typeof null; // devuelve "object"
```


## Manejo de String
Las variables tipo string se pueden manipular del siguiente modo:
```js
var nombre ='Leon', apellido='Cito';
```
- Cambiando el string a minúsculas o mayúsculas:
```js
var nameUpper = nombre.toUpperCase(); //"LEON"
var apellidoLower = apellido.toLowerCase(); //"cito"
```
- Buscando caracteres y obteniendo el número de caracteres:
```js
var primeraLetra = nombre.charAt(0); //'L'
var cantidadLetras = nombre.length;  //4
```
- Es posible concatenarlos:
```js
var nombreCompleto = nombre +' '+apellido; //"Leon Cito"
```
- Las cadena se pueden definir con comillas invertidas. El valor dentro de estas se obtiene con **${}**:
```js
var nombreCompleto_forma2 = `${nombre} ${apellido.toUpperCase()}` //"Leon CITO" 
```
- Se puede acceder a sus caracteres y concatenarlos 
```js
var sub = nombre.charAt(1) + nombre.charAt(2); //"eo"
```
- Se puede obtener un cierto número de caracteres. Desde donde inicia y cuantos se quieren 
```js
var sub = nombre.substr(1,2)  //Toma 2 caracteres desde la posición 1
// "eo"
```
- Para obtener la última letra se realiza así:
```js
var ultimaLetra =  nombre.charAt(cantidadLetras-1); //'n'
```

## Números
Se definen así: Tipo entero
```js
var edad = 15;
var peso = 75;
```
- Se puede incrementar y decrementar del siguiente modo:
```js
edad = edad + 1;
edad += 1;
peso = peso - 2;
peso -= 2;
```

#### Decimales
JS no almacena los valores de manera precisa
```js
var precioVino = 200.3;
var totalx3 = precioVino * 3; //600.9000000000001
```
Para corregir esto se debe usar el prototipo **Math** con el método **round**
```js
var totalx3Correcto = Math.round( precioVino*3*100 ) /100; //600.9
var totalx3Correcto2 = Math.round(totalx3) // 601
```
Es posible definir el número de decimales:
```js
var total2DecimalesStr = totalx3.toFixed(2) //Pero esto es un string
```
Para convertir String a entero se puede usar **ParseFLoat** o **Number**:
```js
var total2DecimalesNum = parseFloat(total2DecimalesStr) 
var total2DecimalesNum2 = Number(total2DecimalesStr)
```
La división se realiza con el operadod **/**
```js
var pizza = 8;
var personas =2;
var cantPorcionesPersona = pizza / personas;  //4
```

## Funciones
Las funciones son secciones de código que puede ser 'llamada' para ejecutar una tarea específica:
- La funcion se declara así:
```js
function nombreFuncion(parametros){
    /// Tareas . . . 
}
```
Un ejemplo de una función sería:
```js
var nombre = 'Juancho', edad = 30;
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad}`);
}
function imprimirEdadParam(n,e) {
    console.log(`${n} tiene ${e}`);
}
```
Las funciones se llamarian así así:
```js
imprimirEdad();
imprimirEdadParam('Pedro',25);
imprimirEdadParam(nombre,edad);
```
En caso tal que no se envien todos los parámetros:
```js
imprimirEdadParam(nombre); // Falta edad
// "Juancho tiene undefined"
```
Las funciones pueden declararse y llamarse en el mismo momento con el siguiente truco:
```js
(function ejemplo(){
    console.log("Ejemplo llamado")
    return true
})()
```
La anterior función se llama y retorna un booleano.

### Nota
Cambiar los parametros primitivos dentro de la función no tienen ningun reflejo por fuera de la funcion.
- Ejm:
```js
var a = 2;
function cambiar(valor){
	valor = 5;
}
cambiar(a) //a sigue siendo 2
```
Pero si lo que se pasa es un valor no primitivo como parámetro dentro de la función (cómo un objeto o un Array), y lo que se modifica es una propiedad del objeto, esto si termina reflejándose por fuera de la funcion.
```js
function cambiarMarca(carro) {
  carro.marca = "Toyota";
}
var miCarro = {marca:'Honda'}; // {marca: "Honda"}
cambiarMarca(miCarro);         // {marca: "Toyota"}
```
Si en la función anterior se modifica todo el objeto adentro, no se vería reflejado por fuera de la función. 
```js
function cambiarCarro(carro) {
  carro = {marca:'Toyota'};
}
var miCarro = {marca:'Honda'}; // {marca: "Honda"}
cambiarMarca(miCarro);         // {marca: "Honda"}
```
- Las funciones también se pueden asignary declarar así
```js
var square = function(number) {
    return number * number
};
```

* Un **método** puede tener un significado diferente a una función en JS. El metódo es una función que funciona como propiedad de un objeto.

## Scope (Ámbito)
El scope define el alcance que tienen los datos dentro del código.

- Si se define una variable, ésta tendrá alcance por dentro de las funciones, así:
```js
var nombre = 'Jaimito';
function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}
imprimirNombreEnMayusculas(); //JAIMITO
console.log(nombre); //JAIMITO
```
* Nombre sería una variable **global**.

La anterior función tiene un problema y son los side-effect o efecto colaterales, ya que la función está cambiando el valor de una variable global. Esto debe evitarse siempre

- Para evitar los side-effect, debe hacerse así:
Se pasa como parámetro y no se altera.
```js
nombre = 'Jaimito';
function imprimirNombreEnMayusculas2(nombre){
    nombre = nombre.toUpperCase();
    console.log('Local: '+nombre);
}
console.log(nombre);                //Jaimito
imprimirNombreEnMayusculas2(nombre) //Local: JAIMITO
console.log(nombre);                //Jaimito
```

- Toda variable global puede ser vista en:
```js
window.nombre
```
- Una variable definida con **var** es de alcance global si no se define dentro de una función

```js```
```js```
```js```
```js```