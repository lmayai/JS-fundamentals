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
imprimirNombreEnMayusculas2(nombre); //Local: JAIMITO
console.log(nombre);                //Jaimito
```

- Toda variable global puede ser vista en:
```js
window.nombre
```
- Una variable definida con **var** es de alcance global si no se define dentro de una función


## Objetos
Los objetos se pueden definir como una representación abstracta de la realidad, los cuales sirven para agregar información. El objeto contiene un conjunto de propiedades que se codifican con una llave y un valor.
```js
var persona = {
    nombre: 'Jaimito',
    apellido: 'Aguirre',
    edad: 25
}   
```
Lo anterior significa que el objeto lo estamos creando y luego guardando en la variable persona. Las propiedas del objeto son el nombre, el apellido y la edad.
Las propiedades y su valor puede ser cualquier tipo de dato: numeros, cadenas, arreglos, funciones, booleanos e incluso objetos.

Para acceder a las propiedades del objeto se usa el **.**
```js
function imprimirNombre(persona){
    console.log('Nombre: '+ persona.nombre);
}
imprimirNombre(persona);
```

- Para la nueva version de ES, es posible definir el parámetro a recibir en la declaración de la función.
- Ahora se puede agregar llaves y dentro la clave que se quiere dentro del objeto:
```js
function imprimirNombre({nombre}){
    console.log('Nombre: '+ nombre);
}
imprimirNombre(persona);
```

- También es posible en el momento de llamar a una función, definir el metodo así:
```js
imprimirNombre({nombre:'Jaimito'});
```

- Los siguientes generan errores en la consola ya que no existe la propiedad nombre
```js
imprimirNombre(); 
imprimirNombre({}); 
imprimirNombre({apellido:'Perez'});
```

- Un ejemplo de un objeto mucho más extenso es el siguiente, en el cuál hay mas de un tipo de datos. 
- Los primeros cuatro son elementos de datos, se denominan **propiedades**
- Los últimos elementos se denominan **métodos** del objeto
```js
var persona = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    genero: 'masculino',
    intereses: ['música', 'esquí'],
    bio: function () {
        alert(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
    },
    saludo: function() {
        alert('Hola, Soy '+ this.nombre[0] + '. ');
    }
};
```
Para acceder a estos sería asi:
```js
persona.nombre
persona.nombre[0]
persona.edad
persona.intereses[1]
persona.bio()
persona.saludo()
```

También es posible acceder usando la notación de corchetes. Definiendo un objeto, también conocidos como JSON(JavaScript Object Notation)
```js
var abuelo = {
    nombre:'Alberto',
    hijos:[
        {
            nombre:'Hernan',
            hijos:[
                {
                    nombre :'Juan'
                }
            ]
        },
        {
            nombre:{
                pila:'Pedro',
                apellido:'Velez'
            }
        }
    ]
}

//Nombre abuelo
abuelo.nombre
abuelo['nombre']

//Nombre hijo Hernán
abuelo.hijos[0].nombre
abuelo.hijos[0]['nombre']

//Nombre del hijo de Hernan
abuelo.hijos[0].hijos[0].nombre
abuelo.hijos[0].hijos[0]['nombre']

// Nombre Pedro
abuelo.hijos[1].nombre.pila
abuelo.hijos[1]['nombre']['pila']
```

## Desestructuración en JS
La desestructuración en JS permite obtener un valor especifico de un JSON desde su declaración. Tomando el objeto **abuelo** de la sección anterior se tiene:
Lo anterior significa que dentro del objeto *abuelo*, se buscará una propiedad *nombre* y se asignará a la variable *nombreAbuelo*.
```js
var {nombre:nombreAbuelo} = abuelo //nombreAbuelo = Alberto
```
- Es posible acceder a valores de niveles inferiores desestructurando así:
```js
var {   
        hijos:[
            {},
            {
                nombre:{
                    pila: nombreHijo2
                }
            }
        ]
    } = abuelo //nombreHijo2 = Pedro
```

## Parámetros como referencia (Paso por referencia o por valor)
Si imaginamos una función a la cuál se le está pasando un objeto *persona*, cada vez que se llame a esta la propiedad *edad* se irá aumentando. 
```js
var jaimito = {
    nombre: 'Jaimito',
    edad: 25
}  
function cumple(persona){
    persona.edad += 1;
}
cumple(jaimito) // edad:26
cumple(jaimito) // edad:27
```
* Eso significa que los objetos que se pasen a una función, y luego se le modifiquen sus propiedades, se verá reflejado por fuera de la función. 

- Para evitar modificaciones en las propiedades de los objetos, se retorna un nuevo objeto con las propiedades cambiadas.
```js
function cumple(persona){
    return {
        ...persona,
        edad: persona.edad + 1,
        nombre: 'JaimitoViejo'
    }
}
var jaimitoMasViejo = cumple(jaimito)
console.log(jaimito)            //{nombre: "Jaimito", edad: 25}
console.log(jaimitoMasViejo)    //{nombre: "JaimitoViejo", edad: 26}
```
El uso de **...persona** permite hacer una *copia* del mismo objeto y luego retornar la propiedad modificada.
- El operador de 3 puntos es llamado **Operador de Propagación - Spread operator**: este operador hace una concatenación entre un objeto vacio y el objeto siguiente a los 3 puntos, por tal parece una clonación de un objeto.

## Comparaciones
Las comparaciones se usan para verificar que dos datos cumplen o no ciertas características. 

#### Comparación igualdad con == o ====
```js
var x = 4;
var y = '4';
```
Al comparar *x* y *y* se tiene los siguiente:
- == Compara el valor
- === Compara el valor y el tipo de dato
```js
(x == y)   //Retorna TRUE, ya que tienen el mismo valor
(x === y)  //Retorna FALSE, ya que tienen el mismo valor, pero no son el mismo tipo de dato
```
- Comparación con objetos:
Los objetos no son datos primitivos, por tal al compararlos, se compara su referencia en memoria. Sea con == o === es falso ya que su referencia es diferente.
```js
var persona1 = {nombre:'juan'};
var persona2 = {nombre:'juan'};

(persona1 == persona2) //retorna FALSE
(persona1 === persona2) //retorna FALSE
```
La comparación daría TRUE si a un objeto se le pasa su referencia, ya que son el mismo objeto en memoria.
```js
var otraPersona = persona1;
(persona1 == otraPersona)  //TRUE
(persona1 === otraPersona) //TRUE
```
Si se desglosa el objeto, con base a otro, esto genera un nuevo objeto en otra referencia en memoria. Como son dos objetos diferentes es falso.
```js
var otraPersona2 {...persona1}
(persona1 == otraPersona2) //FALSE
```
- Si ahora se tiene un objeto y se crea otro objeto con base a este:
```js

```
AL modificar cualquiera de estos dos objetos, se modificaría el otro, ya que ambos apuntan a la misma referencia en memoria. Por tal no es recomendable hacer esto para objetos, ni tampoco para datos no primitivos como array y funciones.
```js
var p1 = {nombre:'juan'};
var p2 = p1;
p1.nombre = 'pedro'
console.log(p1) //{nombre:'pedro'}
console.log(p2) //{nombre:'pedro'}
```
PEro si ahora se crea el objeto clonado y se modifica el original, no se modifica el clonado ya que es otra referencia en memoria.
```js
var p1 = {nombre:'juan'};
var p2 = {...p1}
p1.nombre = 'pedro'
console.log(p1) //{nombre:'pedro'}
console.log(p2) //{nombre:'juan'}
```
- ALgunos datos son:
```js
/*
Boolean:  // false/true
Null:  // nulo o "vacío"
Undefined: // Cuando una variable es declarada pero aún no tiene un valor asignado 
Number: // 383839
String:  // "esto es una string"```
*/
```

```js```
```js```