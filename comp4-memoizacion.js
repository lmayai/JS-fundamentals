/**
 * MEMOIZACIÓN: (No es memorización)
 * Ahorrar computo
 * 
 */

/**
 * Cálculo del factorial
 * FActorial de 6
 * !6 = 6 * 5 * 4 * 3 * 2 * 1
 * !6 = 6 * 5 * !4
 * Caso base es 1
 * 
 * Se verá como guardar resultados que no necesariamente 
 * deben ser calculados nuevamente
 *
 */

function factorial(numero){
    if (numero === 1){
        return 1; 
    }
    return numero*factorial(numero-1)
}

/**
 *  DENTRO de las funciones existe cache. memoria cache
 * Que puede ser creada en el objeto this
 * Donde se van a ir guardando los factoriales
 * Por tal el calculo se hace una primera vez, y si se vuelve a preguntar 
 * será retornado.
 * Se observa que la segunda vez del calculo, se hará mucho mas rapido
 * 
 */
function factorial2(numero){
    if(!this.cache) {
        this.cache = {}
    }

    debugger
    if (this.cache[numero]){
        return 1
    }

    if (numero === 1){
        return 1 
    }
    this.cache[numero] = numero*factorial2(numero-1)
    debugger
    return this.cache[numero]
}

