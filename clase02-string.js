var nombre ='Leo', apellido='Maya';

// Mayusculas o minusculas
var nameUpper = nombre.toUpperCase();
var apellidoLower = apellido.toLowerCase();

// Buscar caracter
var primeraLetra = nombre.charAt(0);
var cantidadLetras = nombre.length;

//concatenar
var nombreCompleto = nombre +' '+apellido;
var nombreCompleto2= `${nombre} ${apellido.toUpperCase()}` //"Leo MAYA" //uso de comillas invertidas<

//acceder a substring
var sub = nombre.charAt(1) + nombre.charAt(2);
var sub2 = nombre.substr(1,2)  //Desde donde empiza y cuantos caracteres

// RETO: Mostrar cual es la ultima letra del nombre
var ultimaLetra =  nombre.charAt(cantidadLetras-1);