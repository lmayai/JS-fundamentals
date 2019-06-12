var edad = 27;

//Incrementos
edad = edad + 1;
edad += 1;

//Decrementos
var peso = 75;
peso = peso - 2;
peso -= 2;

//Ejm
var sandwich = 1;
peso = peso + sandwich; //Suma
var jugar = 3;
peso -= jugar;

//Decimales
var precioVino = 200.3;
var totalx3 = precioVino * 3; //600.9000000000001 -> La manera de almacenar decimales no es precisa.
    //Para corregir;
var totalx3Correcto = Math.round( precioVino*3*100 ) /100; //

// Redondeo completo
var totalx3Correcto2 = Math.round(totalx3)

// 2 decimales
var total2DecimalesStr = totalx3.toFixed(2) //Pero esto es un string

// Convertir String a Numero
var total2DecimalesNum = parseFloat(total2DecimalesStr) 
var total2DecimalesNum2 = Number(total2DecimalesStr)

//División
var pizza = 8;
var personas =2;
var cantPorcionesPersona = pizza / personas; 