var dario = {
    nombre: 'Dario',
    apellido: 'Diaz',
    edad: 24
}

function imprimirNombre(persona){
    // var nombre = persona.nombre - Es equivalente a lo de abajo
    var { nombre } = persona // Se declara la var nombre que sale de persona.nombre 
    console.log('Nombre: ', nombre.toUpperCase())
}

imprimirNombre(dario)

// RETO: Imprimir nombre y edad que imprima 'Hola me llamo sacha y tengo 28 años'
// Pasandole 2 nombres JUAN(12 años) y PEDRO(15años)

function imprimirNombreEdad (persona){
    var {nombre} = persona
    var {edad} = persona
    console.log( `RETO: Hola me llamo ${nombre} y tengo ${edad} años` );
}

imprimirNombreEdad({nombre:'Juan',edad:12});
imprimirNombreEdad({nombre:'Pedro',edad:15});