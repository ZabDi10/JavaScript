/**
 * 
 * Escribir el codigo de una funcion que se pasa como parámetro un numero entero y 
 * devuelve como resultado una cadena de texto que indica si el numero es par o impar. 
 * Mostrar por pantalla el resultado devuelto por la función
 */
function leerDato() {
    let numero = document.getElementById("numero").value;
    if(validarDatos(numero)){
        if (numero%2==0) {
            document.getElementById("resultado").innerHTML="El numero " + numero + " es par";
            
        }else{
            document.getElementById("resultado").innerHTML="El numero " + numero + " es impar";

        }
    };

}
//Los parametros o atributos que se pasan a una funcion NO tienen porque llamarse igual que en la funcion origen.
function validarDatos(dato) {
    if (isNaN(dato) || dato=="" || dato.includes(" ")) {
        document.getElementById("resultado").innerHTML="Indique un numero, no letras";
    }else{
        return true;
    }
}

/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena se le pasa, la funcion determina si esa cadena está formada sólo por mayúsculas, solo por minúsculas o por una mezcla de ambas.
 * 
 *   
 * 
 */ 

function leerTexto() {
    let texto=document.getElementById("texto").value;
    
    if (isNaN(texto) && texto!="" ) {
        validarTexto(texto) 
        
    }else{
        document.getElementById("resultadoTexto").innerHTML="Escribe una cadena, solo letras!"
    } 
}
function validarTexto(texto){

    if (texto==texto.toUpperCase()) {
        document.getElementById("resultadoTexto").innerHTML="El texto esta en mayúscula";
    }else if (texto==texto.toLowerCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto esta en minúscula " + texto.toLowerCase();
    }else{
        document.getElementById("resultadoTexto").innerHTML="El texto esta en minúscula y mayúsculas";
    }
}

/**
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma dorma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo "La ruta nos aporto otro paso natural"
 * 
 */
function leerPalindromo() {
    let palindromo = document.getElementById("palindromo").value;
    let texto;
    if (isNaN(palindromo)) {
        texto = "PALINDROMO"
    } else {
        texto = "CAPICUA"
    }
    
    if (palindromo!="") {
        if(validarPalindromo(palindromo)){
            document.getElementById("resultadoPalindromo").innerHTML= "Si es un " + texto;    
        }else{
            document.getElementById("resultadoPalindromo").innerHTML= "No es un " + texto;
        }
    
    }else{
        document.getElementById("resultadoPalindromo").innerHTML= "No es una frase valida"
    }
}
function validarPalindromo(texto) {
    //Se pasa la cadena a minuscula y elimina todo lso espacios
    let cadenaOriginal = texto.toLowerCase().replaceAll(" ","");
    //convertir la cadena en un array
    let cadenaArray = cadenaOriginal.split("");
    let cadenaSinEspacios = cadenaArray.join("");
    cadenaArray.reverse();
    let cadenaReves = cadenaArray.join("");

    if (cadenaSinEspacios == cadenaReves) {
        return true;
    }else{
        return false;

    }

}


