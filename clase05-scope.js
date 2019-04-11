//Alcance de las variables
var nombre = 'Jaimito';

function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

// nombre es una variabel gloabal, puede ser alcanzada en cualquier lugar.
console.log(nombre);
imprimirNombreEnMayusculas(); //Tiene un side effect, es un efecto colateral a la variable global.
// Esos side-effect se debe evitar.
console.log(nombre); //Ahora nombre no es Jaimito sino JAIMITO
// Buscando en window.nombre, se verifica que es ahi donde esta definida

console.log('Otra forma de hacerlo');
nombre = 'Jaimito';
// COMO HACERLO CORRECTAMENTE
function imprimirNombreEnMayusculas2(nombre){
    // n es de alcance local, solo esta definida dentro de la funcion
    nombre = nombre.toUpperCase();
    console.log('Local: '+nombre);
    // Para acceder a la gloabal es con window.nombre
}

imprimirNombreEnMayusculas2(nombre); //nombre se lleva como parametro, donde es copiada dentro de la funcion
console.log('GLobal: '+nombre)

// Conlcusiones: Una var no definida localmente sera de alcance global