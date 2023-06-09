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
let sumar = number1 +number2;
console.log(sumar);
let apellido = "PONE <strong>PACIOS</strong> no palacios"
nombre += " " + apellido;
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML = nombre;

// caracteristicas de javaScript  no declaras el tipo de dato y no pasa nada

numero3 = "tres";
suma1 = number1 + numero3;
console.log(suma1); // es una manera de visualizar una salida en javascript

let numero = 1;
// crear mi primera funcion -> una serie de instrucciones que se ejecutaran cuando sea llamada
function mostrarAlerta(consola){
    console.log(consola);
    if(numero === 1){
        numero = 2;
        alert("HOLIIIIIIIIIIIII");
        alert("Vale me he calentado");
        nombre = "Diego Zaballos Pacios";
        document.getElementById("nuevoNombre").innerHTML = nombre;
        document.getElementById("boton1").innerHTML = "Cambiame Aghhhh!!!!";
    }else{
        numero = 1;
        alert("SE VIENE EL LOREM");
        document.getElementById("nuevoNombre").innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, enim! Provident accusamus laudantium alias deserunt esse fugiat fuga voluptates dolor reiciendis, velit aliquam iusto beatae voluptate facere laborum pariatur iste.";
        document.getElementById("boton1").innerHTML = "Click!";
    }
}
//Otra manera de llamarlo --> escucha de eventos
document.getElementById('boton1').onclick =  () => {
    alert('Voy antes jejjeejejej');
    mostrarAlerta('Valor. Valor. Valor hasiendo la pasasion al console logo');
}

/* Paso de parametros a una funcion
*/
document.getElementById("sumar1").innerHTML = sumar1(45,34);

function sumar1(a,b) {
    return a + b;
}

function sumar2(){
    let x = document.getElementById("numero1").value;
    let y = document.getElementById("numero2").value;
    document.getElementById("sumarResultado").innerHTML = `El valor de la x es: ${x}. El valor de la y es: ${y}. La suma es: ${sumar1(parseInt(x),parseInt(y))}`
}

// existe otra manera de declarar las variable <2015
var nombreAlumno= "Rosa Huertas";
console.log(nombreAlumno);
// diferencia entre var y let
//1. Se puede volver a declarar la misma variable
var nombreAlumno="José Martinez"
console.log(nombreAlumno);
//ejemplo con let
let nombrePadre="Miguel García";
console.log(nombrePadre);
// no se puede declarar de nuevo una variable con let
//en el mismo bloque de codigo
function otroNombre(){
    let nombrePadre="Gonzalo León";
    console.log("Dentro de la función-> " +nombrePadre);
}
otroNombre();// llamamos la función para que se ejecute
console.log("Fuera de la función-> "+nombrePadre);
// en la declaración de las variables se puede declarar una o más variables en la misma linea
//var nombreMadre;//declaración-> indicando que nombreMadre es una variable
let nombreMadre="Sofia Luna", nombreNino="Fiona Martinez", colegio="Cervantes";
//las variables no estas obligado a declararlas, pero es importante y buena practica
edad=15; // tipo de números entero...
console.log(edad);
precio=5.8;// decimal
console.log(precio);
edad=18;//reemplaza el valor
console.log(edad);
nombreMadre="Rosa Díaz";  //le asigno a la variable nombreMadre en valor de Rosa Díaz
console.log(nombreMadre);
/*
 lo que se guarda en una variable
 tipos-> números (5, 4, 5.9, etc)
         cadena de caracteres ("El nombre es")
         booleanos (true, false)->(verdadero, falso)
*/
let miBooleano=true; //on / off - 0/1
//las cadenas de caracteres existe la limitante de utilizar "" dentro de una cadena
//para ello exite Caracteres de escape en cadenas de texto
let cadena="Esta es una cadena\" muy importante\" de javaScript";
console.log(cadena);
// puedes combinar las dobles comillas con las comillas simples
let cadena2='Esta es la segunda cadena "muy importante"';
console.log(cadena2);
cadena="Esta es una cadena 'muy importante' de javaScript";
console.log(cadena);
//salto de linea con caracteres de escape \n
cadena="Esta es una cadena 'muy importante' \nde javaScript";
console.log(cadena);

/* Operadores Matemáticos
    + - * /-> Operaciones básicas
    %-> móduloo resto de dos números
*/
x=10;
y=2;
let modulo=10%2;// da como resultado el resto de la división
console.log("El módulo entre 10/2 es: " +modulo);
let operacion=(x+2)*2-(y/3);
console.log(operacion);
/*
Operadores de asignación
    = asigna
    += incrementa el numero 
    -= decrementa
    *= multiplica
    /= divide
*/
x+=2; //x=12
console.log(x);
x-=2; //x=10
console.log(x);
x*=2;
console.log(x);
x/=2;
console.log(x);

//se puede utilizar el operador de asignación += eb las cadenas de caracteres
cadena+=cadena2;
console.log(cadena);
//Operador exponencial
x=y**10
console.log(x);
//Operador incremento
++y;
console.log(y);
//Operador decremento
--y;
//salida en pantalla directamente insertando el texto en la última
//línea disponible.
document.write("El valor de y es "+y);

/*
        - Constantes -
    No cambian en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando se declara

    palabras reservadas (palabras clave)= propias del lenguaje 
    let, var, const...
*/
const PI=3.141618;//las constantes se declaran en mayusculas
const MONEDA=5;
//área de un circulo area=r**2xPI
let area=(50**2)*PI;
console.log("El área de una circunferencia de radio 50 es " +area);
    