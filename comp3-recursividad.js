/**
 * RECURSIVIDAD!
 * Es una técnica utilizada en programación que nos permite que 
 * un bloque de instrucciones se ejecute un cierto número
 *  de veces (el que nosotros determinemos).
 */

/**
 * Vamos a dividir un numero
 * 13 / 4 Sería así, daría 3
 * 13 - 4 = 9
 * 9 - 4 = 5
 * 5 - 4 = 1
 * 1 - 4 = -3
 * Haremos la cuenta siempre que el dividendo sea mayor al divisor
 */

/**
 * La recursividad se hace con:
 * Un caso base: cuando el dividendo es menor estricto que el divisor, se hace la resta hasta que no se pueda usar más. 
 * Un caso recursivo: que es el que siempre se repite
 */ 
function divisionEntera(dividendo,divisor){
    if (dividendo < divisor){ //Aquí se acaba la recursividad
        return 0;
    }
    return 1 + divisionEntera(dividendo-divisor , divisor) //Se llama a la funcion recursivamente, pero ahora el dividendo cambia y es restado
}

const num1=30
const num2=1
const res = divisionEntera(num1,num2)
console.log(`${num1}/${num2} = ${res}`)