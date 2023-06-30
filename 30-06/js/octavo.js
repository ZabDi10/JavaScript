/**
 * Funciones en JavaScript
 * 
 * Es un bloque de código definida con un nombre, que puede ser invocada desde el mismo javaScript o desde el documento html
 * 
 */

function sumar() {
    let a = 3, b = 5;
    let suma = a + b;
    return suma; //retorna un valor

}

console.log(sumar()); //recibimos el resultado de la operacion en la función

/**Otro ejemplo donde los valores de a y b no estan definidos
 * 
 */
//La declaracion de a y b tienen ambito local, y solo tienen valor en la funcion sumar()
//Tenemos que declarar las variables a y b, por ejemplo con ambito global
let a=12, b=15;

function sumar2() {
    let suma = a + b;
    multiplicar(a,b);
    return suma;
}

console.log(sumar2());

//Función con argumentos o valores que recibe

function multiplicar(primerN, segundoN) {
    return primerN*segundoN;
}

//Se tiene que pasar los argumentos que necesita para realizar la operación

console.log(multiplicar(2,3));
console.log(multiplicar(23,9));
console.log(multiplicar(a,b));

function dividir(primerN, segundoN) {
    return segundoN/primerN;
}

console.log(dividir(5,0));

//Ejercicio1: Calcula el precio + iva de los siguiente productos:
let leche = 0.76;
let agua = 1.05;
let cereales = 2.35;
let mermelada = 1.96;
let Precio = [];
let Productos = new Map();
//Leche y agua son el 4%
function iva2(iva, producto) {
    let calculo = producto*iva;
    calculo.toFixed(2)
    return (producto*iva).toFixed(2);
}
console.log(iva2(leche, 1.04));
console.log(iva2(agua, 1.04));
console.log(iva2(cereales, 1.21));
console.log(iva2(mermelada, 1.21));

function iva() {
    // leche *= 1.04;
    // agua *= 1.04;
    // cereales *=1.21;
    // mermelada *=1.21;
    Productos.set("Leche", (leche*1.04).toFixed(2));
    Productos.set("Agua", (agua*1.04).toFixed(2));
    Productos.set("Cereales", (cereales*1.21).toFixed(2));
    Productos.set("Mermelada", (mermelada*1.21).toFixed(2));
    Precio.push(leche, agua, cereales, mermelada)
    return Productos;
}
console.log("El precio con iva de cada uno es: ");
console.log(iva());


// Se puede almacenar el resultado de una funcion en una variable
a = multiplicar(4,85);
console.log("a = " + a);
b = dividir(64,32);
console.log("b = " + b);
let r3 = sumar2();
console.log(r3);

/**
 * Ejercicio Iva
 *      a. Validar el dato introducido 2º Función
 *          a.1. Si el dato introducido es incorrecto, envia mensaje de error
 *          a.2 Si el dato es correcto, envia el dato a la 3º función calcularPrecio, que mostrara el resultado del calculo.
 */
function calculoIva() {
    let kilos = document.getElementById("peso").value;
    console.log(kilos);
    const iva = 1.21;
    if(validarDatos(kilos)){
        calculoDatos(kilos, iva);
    }
    
}

function validarDatos(kilos) {
    if(isNaN(kilos)){
        document.getElementById("total").innerHTML= `Error no has puesto un numero`
    }else{
        return true;
    }
}
function calculoDatos(kilos, iva) {
    let precio;
    if(kilos > 0 && kilos <=30){
        if (kilos <= 1) {
            precio = 11.82 * iva;   
        }else if (kilos > 1 && kilos <= 5) {
            precio = 14.59* iva;
        }else if (kilos > 5 && kilos <= 10) {
            precio = 19.09* iva;
        }else if (kilos > 10 && kilos <= 15) {
            precio = 22.73* iva;
        }else if(kilos > 15 && kilos <= 20){
            precio = 27.69* iva;
        }else if (kilos > 20 && kilos <= 25) {
            precio = 32.77* iva;
        }else if(kilos > 25 && kilos <= 30) {
            precio = 37.73* iva;
        }
        precio = precio.toFixed(2);
        document.getElementById("total").innerHTML= `Tus gastos de envio son: ${precio} €`
    }else{
        document.getElementById("total").innerHTML= `Ponga un valor entre 1 kg a 30 kg. Consulte en la oficina`
    }
}