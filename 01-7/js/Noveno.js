/**
 * Las funciones anonimas son comunes en JavaScript, donde se nombra la función pero no tiene nombre, pero se le puede asignar una variable, se invoca a traves de esta.
 */

let hola = function() {
    alert("Hola mundo")
}

const cuadrado = function(numero) {
    return numero*numero;
}
console.log(cuadrado(5))