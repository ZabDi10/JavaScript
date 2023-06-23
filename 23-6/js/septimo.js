/**
 * Conceptos básicos de funciones o métodos
 * 
 * Una función JavaScript es un bloque de codígo diseñado para realizar una tarea particula.
 * Una función JavaScript se ejecuta cuando "algo" lo invoca (lo lamma).
 * 
 * Las funciones pueden ser porpias, como por ejemplo:
 *  function    guardarNombre(){
 *              ....codigo
 * }
 * 
 * para que se ejecute ese bloque de instrucciones, la fucion tiene que ser invocada ya sea en un javascript o desde el html
 * guardarNombre();
 * o desde el html..... onclick="guardarNombre()"
 * 
 * También existen funciones propias del lenguaje o de los lenguajes, que nos realizan algunas tareas de manera automática.
 * 
 * Ejemplo: Funciones últiles para cadenas de texto 
 * 
 * 
 * 
*/

//Función para conocer la longitud de una cadena, incluyendo los espacios

console.log(" ");
console.log("Función length");
let cadena1 = "Hola, como estais todos hoy?";
let nLetras = cadena1.length;
console.log(nLetras);

//Función de concatena
console.log(" ");
console.log("Función concat()");
let cadena2 = " Bien, gracias!"
let cadena= cadena1.concat(cadena2); //es lo mismo cadena1+cadena2
console.log(cadena);

//Concatenar en un bucle
for (let i = 0; i < cadena1.length; i++) {
    cadena += cadena1;
    
}
console.log(cadena);

//Función para pasar a mayuscula una cadena de texto

console.log(" ");
console.log("Función toUpperCase()");
cadena1 = cadena1.toUpperCase();
console.log(cadena1);

//Función para convertir una cadena a minusculas

console.log(" ");
console.log("Función toLoweCase()");
cadena1 = cadena1.toLowerCase();
console.log(cadena1);

//ToLocaleLoweCase -> se refiere a idioma o configuración local, pero el tresultado suele ser el mismo que toLoweCase

console.log(cadena1);

//Función para obtener el carácter que se encuentra en la posición indicada

console.log(" ");
console.log("Función charAt()");
let letra = cadena1.charAt(0);
console.log(letra);

//Función indexOf(letra) calcula la posicion en la que se encuentra la letra indicada, siempre mostrará la primera posicion

console.log(" ");
console.log("Función indexOf()");
let posicion = cadena1.indexOf('a');
console.log(posicion);

//Función lastIndexOf calcula la última posición del caracter indicado, tanto indexOf como lastIndexOf devuelven -1 si no encuentran ese caracter.
console.log(" ");
console.log("Función lastIndexOf()");
posicion = cadena1.lastIndexOf('a');
console.log(posicion);

/**Importante:
 * La funcion lastIndexOf() comienza su búsqueda desde el final de la cadena hacia el principio, aunque la posición devuelta es la correcta empezando a contar desde el principio de la palabra
 * 
 */

// Función para extraer de una cadena
/* subString(inicio, final), extrae una porcion de una cadena de texto. el segundo parámetro es opcional. Si sólo se indica el parámetro inicio, la función devuelve la parte de la cadena original correspondiente desde esa posición hasta el final
*/

console.log(" ");
console.log("Función substring()");
let subcadena1 = cadena1.substring(6,10);
console.log(subcadena1);

/**
 * Cuando se indica el inicio y el final, se devuelve la parte de la cadena original comprendida entre la posicion inicial y la imnediatamente anterior a la posicion final 
 * (es decir, la posción inicio está incluida y la posición final no):
*/

/* Otro ejemplo, si se le pasa la posición incial mayor a la final, se asume que es la posición menor desde donde comienza y la mayor donde termina */

console.log(" ");
console.log("Ej 2 Función substring()");
subcadena1 = cadena1.substring(10,6)
console.log(subcadena1);

/**Convertir una cadena a un array con la funcion split, se debe indicar el caracter separador */
console.log(" ");
console.log("Función split()");
let cadena3 = "Los alumnos son 15 y son muy listos";
let arrayCadena3 = cadena3.split(" ");
console.log(arrayCadena3);
console.log(arrayCadena3[1]);

/**
 * con split tambien puedo extraer toda las letras de una cadena indicando el separador vacio ""
*/
console.log(" ");
console.log("Ej 2 Función split()");
let array2Cadena3 = cadena3.split("");
console.log(array2Cadena3);

//Funciones utiles para arrays
// Conocer la longitud de un array

console.log(" ");
console.log("Función length");
let miArray = [1,2,3,4,5,6,7,8,9];
//Explicacion linea 166
let micopiaArray = miArray;
console.log("Copia " + micopiaArray);
let numElementos = miArray.length;
console.log(numElementos);

//Funcion para unir o concatenar dos arrays

console.log(" ");
console.log("Función concat()");
let miArray2 = array2Cadena3.concat(miArray);
console.log(miArray2);

//Funcion join que es lo inverso a split en las cadenas, convierte un Array en una cadena

console.log(" ");
console.log("Función join()");
let deArrayAcadena = arrayCadena3.join(" ");
console.log(deArrayAcadena);
let miArrayAcadena = miArray.join("-")
console.log(miArrayAcadena);


// Función pop(), elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuey en 1 elemento

console.log(" ");
console.log("Función pop()");
let ultimo = miArray.pop();
console.log(ultimo);
console.log(miArray);

//Función push(), añade un elemento al final de array. El array original se modifica y aumenta su longitud en 1 elemento. (Tambien es posible añadir más de un elemento a la vez)

console.log(" ");
console.log("Función push()");
miArray.push(9);
console.log(miArray);


/**
 * Función shift(), elimina el primer elemento del array y lo devuelve. El array original se ve modificado y su longitud disminuida en 1 elemento.
*/

console.log(" ");
console.log("Función shift()");
let primero = miArray.shift();
console.log(primero);
console.log(miArray);

/**
 * Función unshift(), añade un elemento al principio del array. El array original se moficia y aumenta su longitud en 1 elemento. (Tambien es posible añadir mas de un elemento a la vez)
*/
console.log(" ");
console.log("Función unshift()");
let otroArray = 5;
miArray.unshift(otroArray);
console.log(miArray);

/**
 * Función reverse(), modifica un array colocando sus elemento en el orden inverso a su posición original
*/
console.log(" ");
console.log("Función reverse()");
miArray.reverse();
console.log(miArray);
// Para guardar la copia por seguridad

/**
 * Es usual realizar operaciones con array, si es necesario para el flujo del programa que el array original se mantenga, debemos realizar una copia del array, porque estos métodos modifican directamente el array...
 */

/**
 * Funciones con números
 * 
 */

/**
 * funcion NaN, (del inglés, "Not a Number") JavaScript emplea el valor Nan para indicar un valo rnumérico no definido (por ejemplo, la division 0/0) 
*/
console.log(" ");
console.log("Funcion NaN");
let numero1 = 1, numero2 = 1;
console.log(numero1/numero2);

if(isNaN(numero1/numero2)){
    console.log("resultado indefinido");
}else{
    console.log("El resultado es = " + numero1/numero2);
}

/**
 * Numeros infinitos
*/

console.log(" ");
console.log("Numeros infinitos");
let numero3 = 0;
console.log(numero1/numero3);

/**
 * si necesitamos limitar los decimales y redondear utilizamos la funcion toFixed
 */

console.log(" ");
console.log("Decimales cortos");
let decimales= Math.PI;
console.log(decimales.toFixed(3));
console.log(decimales.toFixed(2));
console.log(decimales.toFixed(4));
console.log(decimales.toFixed());

//Ejercicio: lee un numero decimal y devuelvelo convertido el punto en coma
console.log();
function conversion(){
    console.log(typeof(document.getElementById("coma").value));
    let vuelta = document.getElementById("coma").value;
    let vueltaArray = vuelta.split(".");
    vuelta = vueltaArray.join(",")
    document.getElementById("vuelta").innerHTML = vuelta;
}
