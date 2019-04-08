// Estructuras de control, para decider si se ejecutan o no codigo

var sacha= {
    nombre: 'Sacha',
    apellido: 'Restrepo',
    edad:20,
    esIngeniero:true,
    esCantante:false,
    esDj:false,
    esPiloto:true,
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`);
    // if (persona.esIngeniero === true) {
    if (persona.esIngeniero) {
        console.log(`-Ingenierio`);
    }else{
        console.log(`-No es Ingenierio`);
    }
    if (persona.esCantante) {
        console.log(`-Cantante`);
    }else{
        console.log(`-No es Cantante`);
    }
    if (persona.esDj) {
        console.log(`-DJ`);
    }else{
        console.log(`-No es DJ`);
    }
    if (persona.esPiloto) {
        console.log(`-Piloto`);
    }else{
        console.log(`-No es Piloto`);
    }
}

imprimirProfesiones(sacha);

//// RETO: Imprimir si es mayor de edad.
function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad >= 18){
        console.log('Es mayor de edad, tiene ',persona.edad, ' años')
    }else{
        console.log('No es mayor de edad, tiene ',persona.edad, ' años')
    }
}
imprimirSiEsMayorDeEdad(sacha);