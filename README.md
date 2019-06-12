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

AL modificar cualquiera de estos dos objetos, se modificaría el otro, ya que ambos apuntan a la misma referencia en memoria. Por tal no es recomendable hacer esto para objetos, ni tampoco para datos no primitivos como array y funciones.
```js
var p1 = {nombre:'juan'};
var p2 = p1;
p1.nombre = 'pedro'
console.log(p1) //{nombre:'pedro'}
console.log(p2) //{nombre:'pedro'}
```
Pero si ahora se crea el objeto clonado y se modifica el original, no se modifica el clonado ya que es otra referencia en memoria.
```js
var p1 = {nombre:'juan'};
var p2 = {...p1}
p1.nombre = 'pedro'
console.log(p1) //{nombre:'pedro'}
console.log(p2) //{nombre:'juan'}
```
- Algunos datos son:
```js
/*
Boolean:  // false/true
Null:  // nulo o "vacío"
Undefined: // Cuando una variable es declarada pero aún no tiene un valor asignado 
Number: // 383839
String:  // "esto es una string"```
*/
```

## Condicionales
Las estructuras de control permiten decidir entre la ejecución de un código o no. La condicionales se evaluan del siguiente modo:
```js
persona = {
    nombre:'Juan',
    esIngeniero:true
}
// . . . 
if (persona.esIngeniero) {
    console.log(`-Ingenierio`);
}else{
    console.log(`-No es Ingenierio`);
}
```
Para comparar enteres se hace lo siguiente
```js
if (persona.edad >= 18){
    console.log('Es mayor de edad, tiene ',persona.edad)
}else{
    console.log('No es mayor de edad, tiene ',persona.edad)
}
```

## Funciones que retornan
Las funciones además de ejecutar código pueden retornar algo. A continuación, la función evalua si una persona es mayor de edad, y retorna un literal booleano(true o false)
```js
const MAYORIA_DE_EDAD = 18; 
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}
esMayorDeEdad({edad:20})// retorna TRUE
esMayorDeEdad({edad:15})// retorna FALSE
```

## Arrow functions - Funciones flecha
A las constantes tambipen se le pueden asignar funciones
```js
const esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}
```
Usando una arrow-function también permite codificarse así:
```js
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD;
}
```
Si la función solo retorna y no ejecuta muchas sentencias, se puede omiti las llaves y el return. Quedaría así:
```js
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;
```
Si se desestructura, quedaría así:
```js
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;
```
Ahora a la constante se le asignó una función, por tal para llamar a la función sería así
```js
persona = {edad:15}
esMayorDeEdad1(persona) //FALSE
```

## Ciclo For
Los ciclos permiten la ejecución de tareas repetitivas cierto número de veces.
- Por ejemplo: si se quisiera cambiar el peso de una persona por 365 días, donde aumentará mas que reducir :
```js
for (var i = 1; i<=365 ; i++){
    var pesoRan = Math.random()
    if (pesoRan<0.25){      
        aumentarPeso(juan)
    }else if (pesoRan < 0.5){
        quitarPeso(juan)
    }
}
```
En el ejemplo anterior, el ciclo se recorre 365 veces. El método random() obtiene un valor entre 0 y 1 y decide si aumentar o reducir el peso.

## While
El ciclo while permite ejecutar un código repetidas veces hasta que se cumpla una condición.
- Si se quiere que juan haga ejercicio hasta que cumpla la meta de bajar su peso 3 kg, él debería hacer ejercicio por algunos días para lograr el objetivo.
```js
const META = juan.peso-3
while(juan.peso>=META){
    quitarPeso(juan)
    dias += 1;
    debugger
}
console.log('Te demoraste, ',dias,' días en bajar 3 kilos')
```
Para hacer depuración se usa la palabra **debugger**, luego en el navegador se abre el inspector y se ejecuta el código. El código se detendrá en el break point colocado.

## Do - while
Es similar al while, con la excepción que este se ejecuta al menos 1 sola vez.
- Ejm: SI una persona va a verificar si está lloviendo, contará las veces que ha ido a ver. Cuando deja de llover, deja de ir.
```js
const llueve = () => Math.random()<0.25

do{
    contador++;
}while(!llueve());

console.log(`Veces que fui a ver si llovia: ${contador}`)
```

## Switch
Es una esctructura de control que permite definir las condiciones con *case*
```js
var signo = prompt('Cual es tu día de la semana favorito?')
switch (signo) {
    case 'Lunes':
        console.log('Lunes')
        break;
    case 'Martes':
        console.log('Martes')
        break;
    case 'Miércoles':
    case 'Miercoles':
        console.log('Miércoles')
        break; 
    case 'Jueves':
        console.log('Jueves')
        break;
    case 'Viernes':
        console.log('Viernes')
        break; 
    default:
        console.log('Fin de semana')
        break;
}
```
En el código anterior se usa prompt() para obtener mensajes desde el teclado.
- También es posible definir dos posibles condiciones; si no se usa break, se toma el siguiente posible caso. En el siguiente código toma el *miércoles* con o sin tilde.
```js
case 'Miércoles':
case 'Miercoles':
    console.log('Miércoles')
    break; 
```

## Arrays
Los arreglos son una colección ordenada de datos (primitivos u objetos) los cuales se usan para agrupar información con diferentes valores posibles.
- Por ejemplo si tenemos varios objetos personas, es posible agrupar todos estos en uno.
```js
var juan = {nombre:"Juan",altura:1.8}
var santi = {nombre:"Santi",altura:1.7}
var pedro = {nombre:"Pedro",altura:1.6}
var sebas = {nombre:"Sebas",altura:1.5}

var personas = [juan,santi,pedro,sebas]
```
Para agruparlos valores, se usan los *corchetes*

- Para acceder a uno de los elementos se debe buscar la posición del elemento. Como esté arreglo tiene 4 elementos, los elementos son desde la posicion 0 a la 3.
```js
console.log(personas[0])  //juan
console.log(personas[1])  //santi
console.log(personas[2])  //pedro
console.log(personas[3])  //sebas
```
Para acceder a una propiedad de un objeto del array, se sigue usando el **punto**
```js
personas[0].nombre     //"Juan"
personas[0]['nombre']  //"Juan"
```
- Para recorrer un array se usa un ciclo for así:
```js
for(var i = 0; i<personas.length; i++) {
    console.log( `${personas[i].nombre} mide ${personas[i]['altura']} metros`)
}
```
- También es posible usar **foreach**
```js
personas.forEach( (item,index,array)=>{
    console.log( `${item.nombre} mide ${array[index]['altura']} metros`)
})
```
Se puede observar que es posible acceder por el item, o tambien con el array y su index
- Para agregar un elemento al array se usa *push*
```js
var frutas = ['manzana', 'banano'];
frutas.push('pera') //["manzana", "banano", "pera"]
```

- Para remover el último elemento se usa *pop*
```js
frutas.pop() // ["manzana", "banano"]
```

- Para remover el primer elemento se usa *shift*
```js
frutas.shift() //["banano"]
```

- Para agregar un elemento al inicio se usa *unshift*
```js
frutas.unshift('papaya') //["papaya", "banano"]
```

- Para encontrar el índice de un elemento se usa *indexOf*:
```js
frutas.indexOf('banano') //1
```

- Para eliminar un elemento en particular con su índice se usa *splice*
```js
pos = 1
cantidad = 1
frutas.splice(pos,cantidad) //["papaya"], se eliminó "banano"
```

- Para copiar un arreglo se usa *slice*
```js
var copiaFrutas = frutas.slice() //["papaya"]
// copiaFrutas != frutas, ya que tienen diferentes posiciones de memoria
```

### Filtros
Los filtros permiten retornar un nuevo objeto que cumpla con una condición establecida. La condición se declara en la función pasada como callback.
- Tomando el arreglo personas y creando la función esAlta(), se tiene lo siguiente:
```js
var juan = {nombre:"Juan",altura:1.8}
var santi = {nombre:"Santi",altura:1.7}
var pedro = {nombre:"Pedro",altura:1.6}
var sebas = {nombre:"Sebas",altura:1.85}

var personas = [juan,santi,pedro,sebas]

// Arrow function
var esAlta = (persona) => persona.altura>=1.8;
```
Se filtraran los objetos que cumplan la condición dada en la función esAlta():
```js
var personasAltas = personas.filter(esAlta)
console.log(personasAltas) // [ {objeto juan} , {obejto sebas}]
```
En la constante *personaAltas* ahora se almacena un arreglo que contiene lo filtrado, es decir, las persona altas
- Es posible escribir directamente la función así sin declarar una función, usando una función anónima:
```js
var personasBajas = personas.filter( (personas) => {
	return personas.altura<1.8
})
console.log(personasBajas) // [ {objeto santi} , {obejto pedro}]
```
- En una sintexis más reducida sería así:
```js
var personasBajas = personas.filter( ({altura}) => altura<1.8)
console.log(personasBajas) // [ {objeto santi} , {obejto pedro}]
```

### Map
Con map permite devolver un nuevo arreglo pero con valores modificados.
```js
const pasarAlturaACm= (persona) => {
    persona.altura *= 100 
    return persona
}
var personasEnCm = personas.map(pasarAlturaACm) 
/*
    0: {nombre: "Juan", altura: 180}
    1: {nombre: "Santi", altura: 170}
    2: {nombre: "Pedro", altura: 160}
    3: {nombre: "Sebas", altura: 185}
*/
```
Lo anterior tiene un problema, y es que hubo una modificación del arreglo original de personas
- Para evitar eso debe hacerse una copia del elemento y retornar el cambio del elemento copiado:
```js
const pasarAlturaACm= (persona) => {
    return {
        ...persona,
        altura:  persona.altura * 100,
    }
}
```
Por tal el retorno es la copia de persona con la modificación de la altura
- Otra manera de escribir lo anterior es sin el return y con el retorno entre paréntesis. Esto significa que lo que se retorna es un único objeto con la modificación.
```js
const pasarAlturaACm = (persona) => ({
    ...persona,
    altura:  persona.altura * 100,
})
```
### Reduce
Reduce lo que hace es reducir el array a un único valor. Por ejemplo si se quisiera sumar las alturas de todas las personas, con map se haría así:
```js
var totaAlturas = personas.reduce( funcion() , valorInicialAcumulador )
```
Donde el acumulador por defecto es cero y la función tendrá la cumulación así:
```js
var totaAlturas = personas.reduce( (acum,persona)=>{ 
    return acum + persona.altura
},0)
```
Resumido seria así
```js
var totaAlturas = personas.reduce( (acum,persona)=> acum + persona.altura , 0)
```

## Prototipos
En JS se habla es de prototipos y no de clases. Los prototipos es el mecanismo en el cual los objetos de js heredan caracterisiticas entre si. Los protos funcionan como una plantilla desde la que el objeto hereda propiedades y métodos.
- Pensemos el proto inicialmente como una función.
```js
function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
}
```
Donde *this* se refiere al objeto que se acaba de construir dentro del proto, el cual está vacio y debe llenarse. Implicitamente siempre se retorna el objeto this. This también se puede entender como el objeto actual en el que se está escribiendo el código.
- Toda función tiene una propiedad llamada prototype  predeterminada.
```js
// En el inspector
Persona.prototype
{constructor: ƒ}
    constructor: ƒ Persona(nombre, apellido)
    __proto__: Object
```
- Es posible añadirle propiedades al prototipo de una función, de este modo
```js
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
```
Si se revisa nuevamente el prototipo se tendría una propiedad nueva:
```js
// En el inspector
Persona.protoype
{saludar: ƒ, constructor: ƒ}
    saludar: ƒ ()
    constructor: ƒ Persona(nombre, apellido)
    __proto__: Object
```

- Para  crear objetos basados en prototipos se usa la palabra **new**, lo cual crea una instancia de la función.
```js
var persona1 = new Persona('Juan','Gomez')
var persona2 = new Persona('Pedro','Perez')

persona1.saludar() //Hola, me llamo Juan Gomez
```

- Luego al objeto creado a partir de un prototipo, también se le puede añadir propiedades a su prototipo, así:
```js
persona1.saludar = function(){console.log(`Hi, my name is ${this.nombre}`)}
```
El objeto tendría un método llamado *saludar*. También ese método hace parte de su prototipo, donde hace otra cosa.
```js
// En el inspector
persona1
Persona {nombre: "Juan", apellido: "Gomez", edad: 20, saludar: ƒ}
    apellido: "Gomez"
    edad: 20
    nombre: "Juan"
    saludar: ƒ ()
    __proto__:
        saludar: ƒ ()
        constructor: ƒ Persona(nombre, apellido)
        __proto__: Object
```
### This

- Para entender el parámetro this, se puede hacer lo siguiente, donde en el constructor del prototipo se crea un objeto vacío y luego se retorna.
```js
function Persona2(nombre, apellido){
    obj = {};
    obj.nombre = nombre;
    obj.apellido = apellido;
    return obj;
}
var p3 = new Persona2('Karen','Isaza');
```
Nota: A pesar que es funcional lo anterior, no es una práctica correcta en la codificación.

### Modificando prototipos 
Si se tiene la misma función Persona y se le quiere agregar una propiedad sería así:
```js
function Persona(nombre,apellido,altura){
    this.nombre = nombre;
    this.apellido =apellido;
    this.altura =altura;
}

Persona.prototype.soyAlto1 = function (){
    return this.altura >= 1.8;
}
```
- Qué pasa si se escribiera como una arrow function?
```js
Persona.prototype.soyAlto2 = () => this.altura >= 1.8;
```
Lo anterior tiene un problema que se verá acontinuación:
```js
var erika = new Persona('Erika','Gomez',1.85);
console.log(erika.soyAlto1()); //TRUE
console.log(erika.soyAlto2()); //FALSE
```
La escrita con arrow function tiene un problema con el objeto this, ya que las arrow-functions cambian el contexto.

### El contexto de this.
Digamos que se va a escribir una propiedad del prototipo así con una arrow-function
```js
Persona.prototype.saludar =  ()  => {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
erika.saludar(); //Hola me llamo undefined undefined
```
El objeto *this* si se usa las arrow-function ahora apunta a *window*. Las arrow function cambian el contexto.

### Herencia en Js
JS no soporta herencia porque no soporta el concepto de clases de los otros lenguajes, pero existe la herencia prototipal. 
Esto significa que si un objeto hijo no responde a un método, irá a su prototipo superior y lo buscará ahí, subiendo en la cadena de los objetos padres hasta llegar al objetivo superior *Object*.
- Para que un prototipo herede de otro, se puede codificar lo siguiente:
```js
function heredaDe(protoHijo,protoPadre){
    var fn = function(){}
    fn.prototype = protoPadre.prototype;
    protoHijo.prototype = new fn;
    protoHijo.prototype.constructor = protoHijo;
}
```
- Ahora si se crea un nuevo tipo de persona, que herede de persona, este heredara todos los prototipos de su padre con el método *heredeDe()* sería así:
```js
function Persona(nombre,altura){
    this.nombre = nombre;
    this.altura = altura
}
Persona.prototype.saludar =  function () {
    console.log(`Hola me llamo ${this.nombre}`);
}
Persona.prototype.soyAlto = function () {
    return this.altura >=1.8
}
function Desarrollador(nombre){
    this.nombre = nombre;
}
heredaDe(Desarrollador, Persona);
Desarrollador.prototype.saludar = function (){
    console.log(`Hola soy desarrollador y me llamo ${this.nombre}`)
}
var pedro = new Persona('Pedro',1.8)
var erika = new Desarrollador('Erika')
```
el objeto erika si saluda buscará en su prototipo, pero si el objeto erika quiera saber si es alto, primero busca en su prototipo y luego buscará en su proto padre. Por tal siempre buscará un método en sus protitpos padres.

### Concepto de clases en JS
Luego de entender el concepto de herencia prototipal, y para mejorar la codificación, se agrega desde ECMASCRIPT2015 las clases. Ahora para definir un prototipo y luego definir sus atributos sería así:
```js
class Persona {
    constructor(nombre,altura){
        this.nombre = nombre;
        this.altura = altura;
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
    soyAlto(){
        return this.altura >=1.8
    }
}
```
- Para heredar se usa la palabra **extends**
```js
class Desarrollador extends Persona {
    constructor(nombre,altura){
        super(nombre,altura)
    }
    saludar(){
        console.log(`Hola soy desarrollador y me llamo ${this.nombre}`)
    }
}
```
Los valores falsos de JS son:
 * false
 * 0
 * null
 * ""
 * undefined
 * NaN

### Cadena de prototipos resultante
- Para métodos
```js
var a = {a:1};
// Solo tiene las props. de Object
// a --> Object.prototype --> null
```
- Para arreglos
```js
var a = ['cosa','thing'];
// Tiene métodos como indexOf, forEach , ...
// a --> Array.prototype --> Object.prototype --> null
```
- Para funciones:
```js
function f(){
    return 0;
}
// Tiene métodos como bind(), call()
// a --> Function.prototype --> Object.prototype --> null
```

### Uso de create
Con create es posible heredar también, donde se crea un objeto *b* a partir de uno *a*, y luego *b* hereda el prototype de *a* 
```js
var a = {a:1};
//  a --> Object.prototype --> null

var b = Object.create(a);
//  b --> a --> Object.prototype --> null

var c = Object.create(b);
//  c --> b --> a --> Object.prototype --> null
```

## Asíncronismo
1. Js solo tiene un hilo de ejecución, osea, solo puede realizar una tarea a la vez. Funciona bajo un modelo de concurrencia llamado event loop.
2. Se van ejecutando las tareas tareas, enuna pila de ejecición, call stack.
3. Si una función llama a otra, esta va a la pila y espera que se ejecuten otras para ser llamadas.
4.  Hay información que no se obtiene inmediatamente, a veces se tiene que esperar una respuesta y luego ejecutar algo.
5. Cuando se espera algo y se quiere hacer algo con esa respuesta, se llama a un callback. El callback es una función que se llama al terminar un evento asíncrono.
6. Cuando llega la respuesta, ahora se dirije a la cola de tareas a verificar.
7. Las tareas que deben esperarse son peticiones a servidores,interacciones visuales, etc.
8. Al terminar las tareas principales va a la cola de tareas, las cuales son esos callbacks.
9. Siempre es importante pensar en no bloquear el event loop.


## Tiempos en JS
Cualquier tarea que se delegue por un callback siempre esperará que se ejecuten todas las tareas principales.
```js
console.log('a');
setTimeout(function () {
    console.log('b');
}, 0)
console.log('c');
// Se imprime
// a - c - b 
```

## Callbacks
Los callbacks son los métodos pasados como parámetros de una función, los cuales se ejecutaran luego de completarse las tareas principales.
- Al tomar una petición de tipo get usando Jquery se tiene lo siguiente:
```js
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const onPeopleResponse = function (persona){
    console.log(`FUN: Hola yo soy ${persona.name}`);
}
function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(url , options , onPeopleResponse);
}
obtenerPersonaje(1);
```
El método obtenerPersonaje() se ejecuta como una tarea prinicipal, en la cuál se hace una petición tipo get a una URL especifica. La respuesta de esa petición no es intantánea, por tal la función onPeopleResponse es el callback que se ejecutará cuando responda la petición. 
Esto funciona como código asíncrono el cual no es bloqueante, ya que la tarea principal delega sus funciones a otras.
https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop

- En caso que se llamen varias peticiones seguidas nada garantiza que la respuesta sea secuencial, osea, es posble obtener primero el 3, luego 2 y luego 1; el orden no se puede asegurar.
```js
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
```

### Orden en peticiones
Para garantizar el orden de llegada lo que se debe hacer es no enviar las peticiones por separado, sino, que cuando se llame el callback de la primera petición, este callback llame a otro callback, y el útimo llame a otro... Son llamadas sucesivas que pueden codificarse así:
```js
obtenerPersona(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url , options , function (persona){  
        console.log(`FUN: Hola yo soy ${persona.name}`); 
        if (callback){
            callback()
        }
    }
}

obtenerPersonaje(1, function(){
    obtenerPersonaje( 2, function(){
        obtenerPersonaje(3)
    });
});
```
A pesar que garantiza el orden, esto tiene un problema y es su lectura, en donde imaginarse 20 callbacks hace un código inmantenible. Esto se conoce como el callback-hell o infierno del callback.

### Manejo de errores en las peticiones
En caso que se haga una petición que falle, es importante manejar los errores, para esto se usa el método fail() en la petición de jquery
```js
function obtenerPersonaje(id,callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
     .get(url , options , callback)
     .fail(() => {
        console.log('No se pudo obtener el personaje' ,id)
     }) 
}
```

## Promesas
Las promesas nacen de la necesidad de mejorar la codificación y el manejo del asincronismo en Js, para lograr que el código se vea más secuencial.
```js
algoAsincronico()
    .then(actualizarAlgo)
    .then(guardaralgo)
```
- Las promesas se crean así:
```js
new Promise( function(resolve,rejected){
    if (todoOK){
        resolve();
    }else{
        rejected();
    }
    //Se invoca resolve() para resolver la promesa
    //Se invoca rejected() para generar un error
})
  .then();
  .catch();
```
Las promesas tienen 3 estados: pending(pendiente), Fullfilled(cumplida), rejected(rechazada) y settled(finalizada).
1. Cuando una promesa se crea se pone en estado de pending.
2. Cuando se resuelve puede pasar a fullfilled o rejected.
3. Luego según lo que resolvió se verifica el .then() o el .catch() de la promesa

- Pensando en el objeto ya trabajado de obtener personaje se va a cambiar a un implementación con promesas.
```js
function obtenerPersonajes(id){
    return new Promise( function(good,bad){ // El nombre no es importante    
                                            // good=resolve y bad=rejected
       const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
       $
        .get(url , options , (data)=>{
            good(data); //Data tiene lo que devuelve la petición
        })
        .fail(() => {
            bad(id);
        }) 
    } );   
}
```
- Luego de que se crea un método que retorna el valor de una promesa, se puede verificar al invocar el método lo que resolvio la promesa con el .then() y el .catch()
```js
obtenerPersonajes(1)
    .then((personaje)=>{
        console.log(`EL persona es: ${personaje.name}`) //Se recibe en la petición un objeto que contiene una propiedad name    
    })
    .catch((id)=>{
        console.log('Fallo al verificar el id:',id)
    })
```

### Promesas encadenadas
Para encadenar las promesas lo que se hace es usar el parámetro .then() cuando una petición retorne, en el manejo de la promesa se hará una nueva petición la cual retornará una promesa también. Las nuevas promesas se verán así:
```js
obtenerPersonajes(1)
    .then((personaje1)=>{
        console.log(`EL persona es: ${personaje1.name}`) 
        return obtenerPersonaje(2)
    })
    .then((personaje2)=>{
        console.log(`EL persona es: ${personaje2.name}`) 
        return obtenerPersonaje(2)
    })
    .then((personaje3)=>{
        console.log(`EL persona es: ${personaje3.name}`) 
    })
    .catch( id => console.log('Error en:',id))
```

### Promesas en paralelo
Para controlar promesas en paralelo, se creará un arreglo de promesas y luego se verificará que todas estén resueltas.
```js
var ids = [1,2,3];
var promesas = id.map( id => obtenerPersonaje(id)); // Arreglo de promesas
```
El arreglo promesas verificado en el inspector se ve así:
```
(3) [Promise, Promise, Promise, Promise, Promise, Promise, Promise]
    0: Promise {<pending>}
    1: Promise {<pending>}
    2: Promise {<pending>}
        lenght:3
```
- Luego para obtener las respuestas y valores de las promesas se usa Promise.all()
```js
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(id => console.log('Error en:',id))
```
En consola se ve lo siguiente:
```
0: {name: "Luke Skywalker", height: "172", mass: "77", …}
1: {name: "C-3PO", height: "167", mass: "75",  …}
2: {name: "R2-D2", height: "96", mass: "32",  …}
```

## Async/await
https://developers.google.com/web/fundamentals/primers/async-functions
```js
async function asyncFunction() {
  try {
    const valorCompletado = await promesa;
  }
  catch (valorRechazado) {
    // …
  }
}
```

Este permite la manera más simple de manejar peticiones asíncronas. Await permite detener la ejecución del programa hasta que la promesa sea resuelta. Si se quiere esperar la respuesta de una promesa, el método debe nombrarse con el async.
- La función obtenerPersonaje sería asi:
```js
async function obtenerLosPersonajes(){
    var ids = [1,2,3];
    var promesas = id.map( id => obtenerPersonaje(id));
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes);
    }catch(id){
        console.log('Error en:',id);
    }
}
obtenerLosPersonajes();
```
Await hace que se detenga la ejecucion, si se usa await, la función debe marcarse como async.

## Var let y const
Se recomienda siempre usar *let* o *const* y nunca *var*. *var* a pesar de declararse en un espacio local se puede alcanzar en el global. Esto no permite tener un control claro de las variables, los nombres designados y el nombre y el alcance(scope)
- *let* permite ser modificada
- *const* no permite ser modificada

Un arreglo con const no puede ser redeclarado, pero si pueden manejarse sus atributos.
```js
const a = [1,2,3]
a.push(4) //[1, 2, 3, 4]
a.pop()   //[1, 2, 3]
```

## Fechas
Para las fechas se usa el prototipo de Date()
```js
const hoy = new Date() // Fecha actual por defecto
const nacimiento = new Date(1990,7,12) //Fecha definible
```

## Recursividad en JS
Es una técnica en programación que permite que un bloque de instrucciones se ejecute un cierto número de veces.
- Para la recursividad se usa un caso base(el límite) y un caso recursivo(la operación que se repite)
- Digamos que se quieren dividir 2 números (13/4): La división es la cantidad de veces que se puede restar el mismo número sobre otros, es decir
```
13 - 4 = 9   Va 1
 9 - 4 = 5   Van 2
 5 - 4 = 1   Van 3
 1 - 3 = -3  Ya no cuenta
```
Para lograr la recursividad se tiene un divisor(4) y un dividendo(13).
```js
function dividir(dividendo,divisor){
    if (dividendo < divisor){
        return 0; //Ya no se puede restar mas veces
    }
    return 1 + dividir(dividendo-divisor,divisor);
    // Se llama a la funcion recursivamente,
    // pero ahora el dividendo cambia y es restado
}
dividir(13,4); //Retorna el resultado
```
En el proceso se llamará la misma función cuantas veces sea necesaria hasta que el valor del dividendo sea menor al del divisor. 
- El factorial con recursividad
```
4!  = 4 * 3 * 2 * 1 = 24 
4 * (4-1)  van 12 
12 * (3-1) van 24
24 * (2-1) Van 24
```
```js
function factorial(number){
    if (number < 1){
       return 1; 
    }
    return number*factorial(number-1)
}
factorial(4);
```

## Memoización
La memoización es una técnica que permite guardar en cache valores que no necesariamente debe ser calculados nuevamente. Tomando como ejemplo el factorial.
```
El factorial puede definirse como el calculo de diferentes factial, es decir:
4! = 4 * 3!
```
Eso quiere decir que si podemos guardar en cache el valor de 3!, ya no es necesario recalcularlo.
- Para guardar en cache sería modificar el cálculo del factorial así:
```js
function factorial(number){
    if(!this.cache) {
        this.cache = {}
    }
    if (this.cache[numero]){
        return 1;
    }
    if (number === 1){
       return 1; 
    }
    this.cache[number] =  number*factorial(number-1);
    return this.cache[number];
}
factorial(4);
```

## Closures
Los closures son funciones que pueden recordar el estado de las cosas al ser incovadas.
```js
function crearSaludo(finalDeFrase){
    return function (nombre){ //anonima
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}
```
Imaginarse que se tiene una función que crea un saludo. La función retorna una función la cual va a almacenar el final de una frase.
```js
const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('carnal')
```
A dos variables se les asigna la función crear saludo, en la cual ya tiene almacena la final de la frase. La función en si recibirá un parámetro que es un nombre.
```js
saludoArgentino('Sacha')    // Hola Sacha che
saludoMexicano('Juan')      // Hola Juan carnal
```
Se observa que el retorno de saludoArgentino es *Hola Sacha che*, Donde se pas+o como parámetro el Sacha, y el internamente ya tenía almacenano el che.

## Datos inmutables
Los datos inmutables son aquellos que no cambian. Las funciones se deben garantizar que no cambien ni tengan efectos de lado, side effects.
```js
// Cambia el original
const cumple = person => person.edad++;

// No cambia el original
const cumpleInmutable = persona => {
    ...persona,
    edad:persona.edad+1;
}
```
Con lo anterior se garantiza que el objeto que llegué no será alterado. Los 3 puntos significa que se creara un nuevo objeto basado en el recibido.

## Contextos
El contexto de this puede traer inconvenientes si no se sabe manejar.
```js
// this: hace referencia a window= el objeto global
function saludar(){
    console.log(`HOla mi nombre es ${this.nombre}`);
}
saludar(); //"Hola mi nombre es undefined"
```
- Es posible cambiar el contexto de this de una función usando el metodo bind()
```js
const jessi = {
    nombre : 'Jessi',
    apellido: 'Peréz',
}

const saludar = saludar.bind(jessi);
saludar();  //"Hola mi nombre es Jessi"
```
Bind recibe el nuevo contexto que se asignará dentro de la función.
- Con bind también se puede pasar los parametros de una función al invocarla. El primer parámetro que recibe es el contexto y lo otro son los parámetros propios de la función.
```js
function saludar(saludo='Hola'){ //Por defecto Hola
    console.log(`${saludo} mi nombree es ${this.nombre}`);
}
const saludo = saludar2.bind(jessi,'Hola Che');
saludo(); //"Hola Che! mi nombree es Jessi"
```

