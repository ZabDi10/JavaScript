let d = new Date();
let boton = document.getElementById("boton");
document.getElementById("fecha").innerHTML = d.getDate() + "-" +(d.getMonth()+1) + "-" + d.getFullYear();
document.querySelector("#hora").innerHTML = d.getHours() +":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds(); 

boton.addEventListener("click", ()=>{
    d = new Date();
    document.getElementById("fecha").innerHTML = d.getDate() + "-" +(d.getMonth()+1) + "-" + d.getFullYear();
    document.querySelector("#hora").innerHTML = d.getHours() +":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds(); 
});
let dd = new Date(1999,9,10,2,00,00);
document.querySelector("#dNaci").innerHTML = dd;
document.querySelector("#fCorta").innerHTML = dd.toLocaleDateString("es-es") + " " + dd.getHours();


/* Existe en la programacion dos palabras en ingles que representan la accion que hara el método:
    -get -> recupera o muestra el valor
    -set -> Lo asigna
*/
dd.setHours(10);
document.querySelector("#fCorta2").innerHTML = dd.toLocaleDateString() + " " + dd.getHours();

let beaM = new Date("1998-7-3");
let beaL = new Date("1992-5-8");

if (beaM<beaL) {
    console.log("La mayor es Bea Mena");
}else{
    console.log("La mayor es Bea Lopez");
}
console.log();
beaM.setFullYear(beaM.getFullYear()+67);
console.log(beaM);

//Primero calcular edad actual
//Segundo Restar 
//d es la fecha de hoy dd es mi fecha
let edadActual = d.getFullYear()-dd.getFullYear();
console.log(edadActual);
let edadJub = 67-edadActual;
document.querySelector("#edadJ").innerHTML = `Te quedan ${edadJub} años para jubilarte. Y el año que te jubilaras sera: ${d.getFullYear() + edadJub}`;

let boton2 = document.querySelector("#boton2");
boton2.addEventListener("click", ()=>{
    //Lectura de la fecha del input y pasarlo a date
    let fechaInp = document.querySelector("#fechaInp").value;
    // console.log(fechaInp);
    // console.log(typeof(fechaInp));
    // let fechaForm = new Date(fechaInp);
    fechaInp = new Date(document.querySelector("#fechaInp").value);
    console.log(fechaInp.toLocaleDateString());
})

