/**
 * El do-while se ejecuta al menos una vez
 */

 //EJM: cuántas veces sucede algo: contador

 var contador = 0

 const llueve = () => Math.random()<0.25

 //hacemos algo al menos una vez hasta que se cumpla una condición
 //Si no llueve se deja de ejecutar
 do{
    contador++;
 }while(!llueve());

 if (contador ==1) console.log(`Fui a ver si llovia ${contador} vez`)
 else console.log(`Fui a ver si llovia ${contador} veces`)
 