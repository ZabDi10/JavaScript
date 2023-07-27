/**
 * Por la clase con .
 * Por el id con # 
 * Por el 
 */
window.addEventListener("load", (e)=>{


e.preventDefault(); //No envia el formulario

let mensaje = document.querySelector("#mensaje");
let msn = "";
let boton = document.querySelector(".boton");
document.querySelector("#imc").innerHTML=" ";
let mImc = "";

 

boton.addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre").value;
    
    let pass = document.querySelector("#pass").value;
    
    if (nombre=="" || nombre == null) {
        msn = "El nombre no puede estar en blanco";
        

    }
    if (pass=="" || pass==null || (pass.length>12 || pass.length<8)) {
        msn  += "<br> Escriba una contraseña correcta. >8 digitos y <12 digitos";
        

    }
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);
    let calculo = peso/Math.pow(altura,2);
    console.log(altura);
    if (calculo=="" || isNaN(calculo)) {
        mImc = "Ponga los valores que aparecen en pantalla. El Peso en Kilogramos y la Altura en Metros por favor";
        document.querySelector("#imc").style.color="red";
    }
    //Toda la cadena de ifs
    if (calculo < 18.5) {
        mImc = `Tu IMC es de ${calculo.toFixed(2)}. Tienes bajo peso`
        document.querySelector("#imc").style.color="blue"
    }

    document.querySelector("#mensaje").innerHTML= msn;
    document.querySelector("#mensaje").style.color="red";
    document.querySelector("#imc").innerHTML= mImc;
    
    let inputs=document.querySelectorAll(".entrada");

    inputs.forEach(items=>{
        items.addEventListener("focus",()=>{
        mensaje.innerHTML =" ";
        msn=" ";
        })
    }) 

})
})

function cuadrado(numero) {
    numero *= 100;
    return (numero);
}