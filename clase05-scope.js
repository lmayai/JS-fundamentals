//Alcance de las variables
var nombre = 'Jaimito';

function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

// nombre es una variabel gloabal, puede ser alcanzada en cualquier lugar.
console.log(nombre);
imprimirNombreEnMayusculas(); //Tiene un side effect, es un efecto colateral a la variable global.
// Esos side-effect se deben evitar.
console.log(nombre); //Ahora nombre no es Jaimito sino JAIMITO
// Buscando en window.nombre, se verifica que es ahí donde está definida

console.log('Otra forma de hacerlo');
nombre = 'Jaimito';
// COMO HACERLO CORRECTAMENTE
function imprimirNombreEnMayusculas2(nombre){
    // n es de alcance local, solo está definida dentro de la función
    nombre = nombre.toUpperCase();
    console.log('Local: '+nombre);
    // Para acceder a la gloabal es con window.nombre
}

imprimirNombreEnMayusculas2(nombre); //nombre se lleva como parámetro, donde es copiada dentro de la función
console.log('GLobal: '+nombre)

// Conclusiones: Una var no definida localmente será de alcance global