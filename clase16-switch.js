/** Estructura switch */

var signo = prompt('Cuál es tu signo?')

switch (signo) {
    case 'acuario':
        console.log('Acuario')
        break;
    case 'cáncer':
    case 'cancer':
        console.log('Cancer')
        break;
    case 'libra':
        console.log('Libra')
        break; 
    case 'virgo':
        console.log('Virgo')
        break;
    case 'leo':
        console.log('Leo')
        break; 
    default:
        console.log('Otro')
        break;

}