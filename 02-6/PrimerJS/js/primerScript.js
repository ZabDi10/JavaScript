// Comentarios de linea
/*
Comentario de bloque
*/
// alert("Hola Mundo DATW")

// Acceso a los elementos por id del HTML
// 1. Crear una variable -> Lugar donde se va a almacenar una informacion tipo string, númerica, función en resumen un valor
//  1.1 Declaracion -->  -(comenzar con letras-no numero-no por caracteres especiales-Siempre de la forma cammell -> nombreDelUsuario) no debe contener espacios
let nombre = 'Diego Zaballos Pacios'; // Comillas indican que es una cadena de caracteres

let parrafo = document.getElementById("parrafo");
parrafo.innerHTML = nombre;
console.log(nombre);
document.getElementById("demo").innerHTML = "Hello JavaScript"

// Variables tipo entero
let number1 = 45;
let number2 = 25;
let suma = number1 +number2;
console.log(suma);
let apellido = "PONE <strong>PACIOS</strong> no palacios"
nombre += " " + apellido;
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML = nombre;

// caracteristicas de javaScript  no declaras el tipo de dato y no pasa nada

numero3 = "tres";
suma1 = number1 + numero3;
console.log(suma1);
