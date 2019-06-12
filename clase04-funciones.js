var nombre = 'Juancho', edad = 30;

//Crear funciones
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad}`);
}
function imprimirEdadParam(n,e) {
    console.log(`${n} tiene ${e}`);
}

// Llamar funciones
imprimirEdad();
imprimirEdadParam('Pedro',25);
imprimirEdadParam(nombre,edad);
imprimirEdadParam(25,'Pedro'); //Tipado débil
imprimirEdadParam(nombre); //:Juancho tiene undefined, el valor no esta definido, al ser interpreatado, dará un tipo a las variables. UNDEFINED es un tipo de dato

