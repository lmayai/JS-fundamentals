/**
 * CLOSURES:
 * Es una funcion que recuerda el estado de las cosas cuando
 * fue invocadas
 */


function crearSaludo(finalDeFrase){
    return function (nombre){ //anonima
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

/**
 * A cada consante se le está asignando una funcion, en la cual a esa funcion asigna
 * se le pasa un parámetro que va a recordar, lo que recuerda es 
 * che, carnal o parce.
 * Luego cuando se llama la funcion que se retorno, y se le 
 * pasa el parametro que es un nombre
 */
const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('carnal')
const saludoColombiano = crearSaludo('parce')

/**
 * EL nombre se pasa, por tal la funcion anonima ahora es 
 * la constante, cuando se llama se observa que recuerda 
 * lo asignado previamente.
 */
saludoArgentino('Sacha')
saludoMexicano('Juan')
saludoColombiano('Pedro')