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

const MAYORIA_DE_EDAD = 18; 

// A una variable es posible asignarle una función
// Ponerle const para definir que si es una funcion
const esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

//Tambien se puede con una arrow functions, igual a lo de arriba
//const esMayorDeEdad2 = (persona) => {
//SI es un unico parametro se puede ahora rlos parentesis
const esMayorDeEdad2 = persona => {
    return persona.edad >= MAYORIA_DE_EDAD;
}

//SI lo unico que hace la funcion es retornar, la anterior
// funcion queda de la siguiente manera
const esMayorDeEdad3 = persona => persona.edad >= MAYORIA_DE_EDAD;

//tmabien como solo interesa la edad se puede desestructurar aun mas
const esMayorDeEdad4 = ({edad}) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad4(persona)){
        console.log('Es mayor de edad, tiene ',persona.edad, ' años')
    }else{
        console.log('No es mayor de edad, tiene ',persona.edad, ' años')
    }
}

imprimirSiEsMayorDeEdad(juan);
imprimirSiEsMayorDeEdad(sacha);

function permitirAcceso(){
    if (!esMayorDeEdad4({edad:17})){
        console.log('ACCESO DENEGADO')
    }
}

permitirAcceso();



/// RETOR ESCRIBIR ES MENOR DE EDAD COMO ARROW FUNCTION 
// y retornar la negacion a la llamada es mayor de edad
var esMenorDeEdad = persona => esMayorDeEdad4(persona);


console.log('15 años es menor:' + esMenorDeEdad(sacha))
console.log('19 años es menor:' + esMenorDeEdad(juan) )
