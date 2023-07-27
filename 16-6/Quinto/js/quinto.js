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
    case 6, 7:
        // diaS ="Sabado";
        diaS = "Fin de Semana";
        break;
    // case 7:
    //     diaS ="Domingo";
    //     break;
    default:
        diaS ="Error"
        break;
}
document.getElementById("dia").innerHTML=diaS;

/**
 * 
 * Ejercicios:
 * Da base de la puntucion numerica de los alumnos;
 * 0-4 insuficiente
 * 5-6 bien
 * 7-8 notable
 * 9-10 sobresaliente
 * 
*/
const array = [];
function nota(){

    let nota = parseInt(document.getElementById("notas").value);
    console.log(typeof(nota));

    switch (nota) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            nota = "Insuficiente";
            break;
        case 5:
        case 6:
            nota = "Bien";
            break;
        case 7:
        case 8:
            nota = "Notable";
            break;
        case 9:
        case 10:
            nota = "Sobresaliente";
            break;
        default:
            nota ="Ponga un numero del 0-10";
            break;
    }
    document.getElementById("nota").innerHTML=nota;
    array.push(nota);
    console.log(array);
    array.forEach((valor, index) => {
        let frase = `<p id="persona${index}"></p>`;
        document.getElementById("caja").innerHTML = frase; 
        document.getElementById("persona" + index).innerHTML= `Persona ${index} tiene un ${valor}`; 
    });
}

//bucle for each ->
let colores=["#f2f2f2","#001100","red","#000000","#d8d5d7","green"];
function cambiarColor(){
    let indice=parseInt(document.getElementById("numero").value);
    --indice;
    console.log();
    for(let i=0; i<colores.length; i++){
        if(i==indice){
            document.getElementById("caja1").style.backgroundColor=colores[i];
            document.getElementById("dia").style.color=colores[i];
            
        }
    }
    for(let i of colores){
        document.getElementById("caja2").style.backgroundColor=i;
    }
}
