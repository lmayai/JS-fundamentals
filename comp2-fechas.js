/**
 * MANEJO DE FECHAS - ¿Hace cuántos nació?
 * Cualcular mi edad en días.Están en milisegundos
*/

// Dias ocurridos entre las fechas
function diasEntreFechas(fecha1,fecha2) { 
    const unDia = 1000 * 60 * 60 * 24 //Milisegundos en un día
    const diferencia = Math.abs(fecha1-fecha2)
    return Math.floor(diferencia/unDia)
}

const hoy = new Date() // Fecha actual por defecto
const nacimiento = new Date(1990,7,12)

console.log('Nació hace',diasEntreFechas(nacimiento,hoy),'días' )