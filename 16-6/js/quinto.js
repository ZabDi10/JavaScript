/**
 * if - else -> tambien existe otra estructura de control de flujo switch-case
 *  Su funcion es: segun el parametro o valor que contenga, puede realizar una serie de opciones 
 * 
 * Ejemplo:
 * switch(expression){
 * case x : 
 *      //code block
 *      break;
 * case y:
 *      //code block
 *      break; //Para salir del switch y no seguir evaluando los siguientes casos
 * default:
 *      //code block
 * } 
 * 
 * 
 * Asi es com funciona:
 * 
 * La expresión de cambio de evalúa una vez.
 * El valor de la expresión se compara con los valores de cada caso.
 * Si hay una coincidencia, se ejecuta el bloque de codigo asociado
 * Si no hay ninguna coincidencia, se ejecuta el bloque de código predeterminado (default)
 * 
 */

//Ejemplo sencillo
let dia = new Date().getDay();
console.log(dia);
let diaS;
switch (dia) {
    case 1:
        diaS ="Lunes";
        break;
    case 2:
        diaS ="Martes";
        break;
    case 3:
        diaS ="Miercoles";
        break;
    case 4:
        diaS ="Jueves";
        break;
    case 5:
        diaS ="Viernes";
        break;
    case 6:
        diaS ="Sabado";
        break;
    case 7:
        diaS ="Domingo";
        break;
    default:
        diaS ="Error"
        break;
}
document.getElementById("dia").innerHTML=diaS;