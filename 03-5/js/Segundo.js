/*
1. Operadores de comparación
2. Operadores Logicos - Y / O
3. Operadores ternarios


*/

// Los operadores de comparación devuelven un resultado booleano true/false indicando 
// si la comparación se cumple o no
let x=2,y=3;
//comparar si son iguales
let resultado=(x==y);
document.getElementById("comp1").innerHTML=resultado;
//comparar si son diferentes
resultado=(x!=y);
document.getElementById("comp2").innerHTML=resultado;
// comparar si un número es mayor que otro 
resultado=(x>y);
document.getElementById("comp3").innerHTML=resultado;
// comparar si un número es mayor o igual que otro 
resultado=(x>=y);
document.getElementById("comp4").innerHTML=resultado;
// comparar si un número es menor que otro 
resultado=(x<y);
document.getElementById("comp5").innerHTML=resultado;
// comparar si un número es menor o igual que otro 
resultado=(x<=y);
document.getElementById("comp6").innerHTML=resultado;
// comparar si son iguales en contenido y en tipo de dato
let z="2"; // tipo de cadena de texto
resultado=(x===z);
document.getElementById("comp7").innerHTML=resultado;

//Operadores Lógicos
//Operador Y representados por &&
resultado=(x==y) && (x===z);// false    false-> false
document.getElementById("comp8").innerHTML=resultado;
resultado=(x==y) && (x==z);// false    true-> false
document.getElementById("comp9").innerHTML=resultado;
resultado=(x<y) && (x==z);// true    true-> true
document.getElementById("comp10").innerHTML=resultado;
//operador lógico OR y se representa con dos barras ||
resultado=(x==y) || (x===z);// false    false-> false
document.getElementById("comp11").innerHTML=resultado;
resultado=(x==y) || (x==z);// false    true-> true
document.getElementById("comp12").innerHTML=resultado;
resultado=(x<y) || (x==z);// true    true-> true
document.getElementById("comp13").innerHTML=resultado;
//Operadores ternario -> evalua una condición y si se cumple hace algo
// sino se cumple hace otra cosa
// estructura-> expresión ? valor o ejecución si es verdadero : valor o ejecución si es falso
let muestra=x<y?"X es menor que Y":"X es mayor que Y";
document.getElementById("muestra").innerHTML=muestra;