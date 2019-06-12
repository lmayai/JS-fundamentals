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
// Ponerle const para definir que si es una función
const esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

//También se puede con una arrow function, igual a lo de arriba
//const esMayorDeEdad2 = (persona) => {
//Si es un único parámetro se puede ahorrar los paréntesis
const esMayorDeEdad2 = persona => {
    return persona.edad >= MAYORIA_DE_EDAD;
}

// Si lo único que hace la función es retornar, la anterior
// función queda de la siguiente manera
const esMayorDeEdad3 = persona => persona.edad >= MAYORIA_DE_EDAD;

//También como solo interesa la edad se puede desestructurar aún más
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



/// RETO: ESCRIBIR ES MENOR DE EDAD COMO ARROW FUNCTION 
// y retornar la negación a la llamada es mayor de edad
var esMenorDeEdad = persona => esMayorDeEdad4(persona);


console.log('15 años es menor:' + esMenorDeEdad(sacha))
console.log('19 años es menor:' + esMenorDeEdad(juan) )
