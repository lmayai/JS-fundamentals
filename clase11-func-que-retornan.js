var sacha= {
    nombre: 'Sacha',
    apellido: 'Restrepo',
    edad:20,
    esIngeniero:true,
    esCantante:false,
    esDj:false,
    esPiloto:true,
}

var juan={
    nombre:'Juan',
    apellido:'Gomez',
    edad:13
}

//MAGIC_NUMBERy const ya que no cambiará
// También usarlas en mayúsculas es una buena práctica
const MAYORIA_DE_EDAD = 18; 

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log('Es mayor de edad, tiene ',persona.edad, ' años')
    }else{
        console.log('No es mayor de edad, tiene ',persona.edad, ' años')
    }
}


imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);


