/**
 * DIferencias entre usar var, let y const
 */

var sacha = {
    nombre:'Sacha',
    apellido: 'Peréz',
    edad : 22
}

/**
 * Cuando se declara con var dentro, es lo mismo que si se declara
 * var mensaje arriba del primer if - ASI NO DEBE HACERSE.
 * Pero JS se da cuenta que se está declarando la var asi no entre al IF
 */
function esMayorDeEdad(persona){
    if (persona.edad>=18){
        var mensaje = 'Es mayor de edad'
    }else{
        var mensaje = 'Es menor de edad' 
        var mensaje2 = 'MEnsaje 2' 
    }
    console.log(mensaje)
    console.log(mensaje2) //Undefined, ya que es vacía, pero no saca error por que JS si la define
}

/**
 * DEBE HACERSE ASÏ
 */
function esMayorDeEdad2(persona){
    var mensaje
    if (persona.edad>=18){
        mensaje = 'Es mayor de edad2'
    }else{
        mensaje = 'Es menor de edad2'       
    }
    console.log(mensaje)
}


/**
 * SI SE USA LET
 * La variable no puede ser alcanzada por fuera.
 * El alcance se da solo dentro del bloque, por fuera da error
 */
function esMayorDeEdad3(persona){
    if (persona.edad>=18){
        let mensaje = 'Es mayor de edad3'
    }else{
        let mensaje= 'Es menor de edad3'       
    }
    //console.log(mensaje)  //mensaje is not defined 
}

/**
 * DEBE HACERSE ASí!
 */
function esMayorDeEdad4(persona){
    let mensaje
    if (persona.edad>=18){
        mensaje = 'Es mayor de edad4'
    }else{
        mensaje= 'Es menor de edad4'       
    }
    console.log(mensaje)  //mensaje is not defined 
}

/**
 * PARA CONST:
 * Es similar a let, salvo que no se puede reasignar la variable
 */
function esMayorDeEdad5(persona){
    let mensaje
    const MAYORIA = 18
    if (persona.edad>=MAYORIA){
        mensaje = 'Es mayor de edad5'
    }else{
        mensaje= 'Es menor de edad5'       
    }
    console.log(mensaje)  //mensaje is not defined 
}
// console.log(MAYORIA) //MAYORIA IS NOT DEFINED


esMayorDeEdad(sacha)
esMayorDeEdad2(sacha)
esMayorDeEdad4(sacha)
esMayorDeEdad5(sacha)

/**
 * AHORA CONST CON ARREGLOS
 * No se puede reasignar, pero se pueden sumar elementos con push
 */
const num = [1,2,3,4,5,6]
//num = [1,2]  // Esto no se puede, ya que no se puede reasignar el arreglo

//Se puede modificar haciendo un push
num.push(10)
console.log(num) //7) [1, 2, 3, 4, 5, 6, 10]

/**
 * EN LOS CICLOS FOR
 * SI i es var, opuede accederse por fuera
 */
for(var i=0;i<10;i++){
    console.log(i)
}
console.log('Termino el for, i es= ',i)

//PERO SI ES LET, no se puede acceder por fuera
for(let j=0;j<10;j++){
    console.log(j)
}
//console.log('Termino el for, j es= ',j) //j is not defined

/**
 * CONCLUSIONES:
 * Let, reduce el alcance de la variable al igual que const
 * Lo mejor es reducir siempre al minimo al alcance de la variable, usando let. 
 * Si no cambiaram, usar const.
 * REvisar bien el uso de var
 */