/**
 * El do-while se ejecuta al menos una vez
 */

 //EJM: cuantas veces sucede algo: contador

 var contador = 0

 const llueve = () => Math.random()<0.25

 //hacemos algo al menots una vez hasta q se cumpla una condicion
 //Si no lleuve se deja de ejecutar, 
 do{
    contador++;
 }while(!llueve());

 if (contador ==1) console.log(`Fui a ver si llovia ${contador} vez`)
 else console.log(`Fui a ver si llovia ${contador} veces`)
 