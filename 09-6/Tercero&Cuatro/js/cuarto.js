/**
 * Bucle for: la estructura for permite realizar repeticiones for(declaracion; condición; incremento){
 * 
 * }
 */
for(let i=0; i<=10; i++){
    // console.log(i);
}

/**
 * La idead del funcionanmiento de un bucle dor es la siguiente:"mientras la condición indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la condición".
 */

//ejemplo de un bucle con los diferentes <hX> de HTML
function salidaH(){
    for(let i=1; i < 7; i++){
        // console.log(i);
        document.write(`<h ${i}> Encabezado de nivel ${i} </h ${i}>`);
        document.write("<h" + i + "> Encabezado de nivel "+i+ "</h" + i + ">"); 
    }

}
function factor(){
    // Si el input fuese solo text
    /*  let numero = document getElementById("numero").value;
        console.log(numero);
        if(isNaN(numero)){
            document.getElementById("msnError").innerHTML = "Indica un número, no letras";
        }else{
            let longitud = document.getElementById("numero").value;
            for(let i=1; i<=longitud; i++ ){
                numero *= i;
                console.log(numero);
            }
        }*/

    let numero = 1;
    let longitud = document.getElementById("numero").value;
    console.log(longitud);
    for(let i=1; i<=longitud; i++){
        numero *= i;
        
    }
    console.log(numero);
    document.getElementById("factorial").innerHTML = numero;
}



let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function mostrarDias(){
    let etiqueta
    for(i in dias){
        etiqueta = "array" + i;
        document.getElementById(etiqueta).innerHTML = dias[i];
}}


dias.forEach(index => {
    console.log(index);
});

/**
 * Ejercicio el factgorial de un número enteron es una operacion matematica que consiste en multiplicar todos los factores n x (n-1) x (n-2) x....x1. Asi, el factorial de 5 (escrito como 5!) es igual a: 5! = 5x4x3x2x1 =120 
 * Utilizando la estructura for, crear un script que calcule el factorial del número entero
 */