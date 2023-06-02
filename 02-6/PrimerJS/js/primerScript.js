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
    