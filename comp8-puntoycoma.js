/**
 * DONDE POR PUNTO Y COMO y CUANDO NO
 * Hay casos en que si debe usarse
*/

//Innecesario, despueś de una llave
function a() {  
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }; //Pa que?
}; //Pa qué?

// Obligatorios en 2 casos
console.log('HOla')
//[1,2,3].forEach (n=>console.log(n*2))
//Esto da un error el cual es dificil de detectar
//Falta el ; al principio
;[1,2,3].forEach (n=>console.log(n*2))

const nombre='aaa'
console.log('Hola J')
//`${nombre} es un dev`
//También un error muy extraño diciendo que no es una funcion
;`${nombre} es un dev`


/**OTRO 
function calcDoble(n) {
    return 
        {
            original:n,doble:n*2
        }
}
}*/
// SI después del de return encuentra un enter, lo toma como ;}
// Por tal da error, debería ser así
function calcDoble(n) {
    return {original:n,doble:n*2}
}
calcDoble(2)

/**
 * SON CASOS MUY ESPECIFICOS
 */


