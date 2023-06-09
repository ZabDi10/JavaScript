/*
Matrices o vectrores -> Arrays (Matrices)



La declaracion de variables aisladas como por ejemplo los dias de la semana


*/

let dia1= "Lunes";
let dia2= "Martes";
// Aunque esto es correcto, es mas eficiente cuando tenemos una coleccion de datos que guardan relacion crear Arrays
//Sintaxis de un Array let nombre_array=[valor1, valor2,....valorn]


let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

/*
Aspectos importantes para los arrays
1. Cada elemento tiene un indice
2. Los indices comienzan en 0
3. Para acceder a un elemento lo tenemos que llamar con el nombre del array y su indice -> 
*/
document.getElementById("dia0").innerHTML = dias[0];
document.getElementById("dia6").innerHTML = dias[6];

/*
Ejercicio: Realiz aun array con los meses del año y muestra por pantalla al menos 3 meses del verano
*/

let meses =[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Ocutubre",
    "Noviembre",
    "Diciembre"
];

document.getElementById("mes5").innerHTML = meses[5-1];
document.getElementById("mes12").innerHTML = meses[12-1];

/**
 * A partir del siguiente array que se proporciona:
 * 
 */
let valores = [true,5,false,"hola","adios",2];
/**
 * Determinar cual de los dos elementos numericos es mayor
 * Utilizamos exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false 
 * Determina el resultado de las cinco operaciones matematicas realizadas con los dos elementos numéricos
 */

//R1
let resultado1 = valores[1]>valores[5]?valores[0]:valores[2];
document.getElementById("R1").innerHTML = resultado1;

//R2
let resultado2 = valores[0] || valores[2];

document.getElementById("R2").innerHTML = resultado2;

//R3
let suma = valores[1]+valores[5];
let resta = valores[1]-valores[5];
let multiplicacion = valores[1]*valores[5];
let division = valores[1]/valores[5];
let factor = valores[1]%valores[5];
let operaciones = `<p>La suma es: ${suma}</p> <p>La resta es: ${resta}</p> <p>La multiplicacion es: ${multiplicacion}</p> <p>La division es: ${division}</p> <p>El factor/resto es ${factor}</p>`;
document.getElementById("operaciones").innerHTML = operaciones;

//CONDICIONALES IF/ELSE
let edad = 18;
if(edad>=18){
    //Bloque de instrucciones
    ++edad;
    let cumple = "el año que viene tendras " + edad;
    let mensaje = "Ya puedes ir a la Disco";
    document.getElementById("mensaje").innerHTML = cumple + " años. " + mensaje;
}else{
    let mensaje = "Espera un poco";
    document.getElementById("mensaje").innerHTML = mensaje;
}

//Cuando necesitamos evaluar la negacion de un booleano (True/False) utilizamos el simbolo ! antes de la variable.

let mostrar = true;
if(mostrar){
    document.getElementById("mostrado").innerHTML = "Entro al if porque mostrar es true";

}else{
    document.getElementById("mostrado").innerHTML = "No Entro al if, sino al Else porque mostrado es falso"
}
if(!mostrar){
    document.getElementById("mostrado1").innerHTML = "Entro al if porque mostrado es falso"
    
}else{
    document.getElementById("mostrado1").innerHTML = "No entro al if porque mostrar es true, y al estar la ! se ha invertido el booleano";
}
let numero1 = 5;
let numero2 = 8;
if(numero1 < numero2){
   alert("Número 1 no es mayor que número 2") 
}
if(numero2 > 0){
   alert("El número 2 es positivo") 
}
if(numero1 != 0 || numero1 < 0){
   alert("El número 1 es negativo o distinto de cero") 
}
if(++numero1 <= numero2){
   alert("Incrementar en 1 unidad el valor de número 1 no lo hace mayor o igual que número 2") 
}

/**
 * Existe la opcion de anidar if else -if -else
 * Evaluar dos condiciones
 */

/**
 * si eres <12 eres pequeño, si eres <19 eres adolescente
 * si eres <35 sigues siendo joven
 * sino...... "Cuidate mucho"
 * 
 */
let nEdad=42;
let msEdad;
if(nEdad<12){
    msEdad = "Todavia eres muy pequeño";
}else if(nEdad<19){
    msEdad = "Eres adolescente";
}else if(nEdad<35){
    msEdad = "Sigues siendo joven";
}else{
    msEdad = "Cuidate mucho";
}
document.getElementById("msEdad").innerHTML = msEdad