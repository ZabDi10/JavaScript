/**
 * 
 * Bucles while
 * 
 * while (condicion){ ** se repite mientras la condicion sea positiva
 *    //bloque de codigo
 * }
 * Ejemplo: mostrar en la consola los numeros del 1-15
 * 
 */
function ejemploPrimero(){
  let i=0;
while (i<=15) {
    console.log(i);
    i++;
}
let interruptor = false;
i = 1;
while (!interruptor) {
    
    if(i==2){
        interruptor = true;
    }
    console.log(interruptor);
    i++;
}}


function ejemploArrays(){
//Declaramos una constante tipo array de marcaCoches
const cars = ["BMW","Volvo","Saab","Ford"];
let o = 0;
let text = "";

while (cars[o]) {
    text += cars[o] + " ";
    console.log(text);
    o++;
}}

function alertaTexto(){
    text = null;
    while (text == null) {
        text = prompt("Escribe un nombre");
        if (text != "") {
            console.log(text);
            break;
        }
    
    }
    console.log("He salido");
}
//Ejercicio: lee un número hasta que sea par, sino sigue leyendo
function alertaNumero(){
    let num;
    while (num %2 != 0) {
        num = prompt("Escribe un número");
        console.log(num);
    }
    // while (num == null) {
        
    //     num %= 2;
    //     if (num == 0) {
    //         break;
    //     }
        
    // }
    console.log("He salido");    
}

/**
 *  Bucle do While: hacer mientras...
 * 
 * Es igual a while, con la diferencia que siempre se ejecuta a menos de 1 vez
 * do{
 *  //codigo to guapo....
 * 
 * }while(condición)
 * 
 */

//Ejecicio: Pedimos al usuario que escriba el nombre Maria y mientras no lo haga lo vuelve a pedir
function ejemploDoWhile() {
    let nombre;
    do {
        nombre = prompt("Diga el nombre correcto")
        if (nombre==null) {
            break;
        }
    } while (!(nombre == "Maria"));
    if (nombre!=null) {
       alert("Acertaste") 
    }
    
    
}