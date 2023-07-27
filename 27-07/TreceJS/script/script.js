/**
 * Por la clase con .
 * Por el id con # 
 * Por el 
 */
let mensaje = document.querySelector("#mensaje").innerHTML=" ";
let msn = "";
let boton = document.querySelector(".boton");
boton.addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre").value;
    console.log(nombre);
    let pass = document.querySelector("#pass").value;
    console.log(pass.length);
    if (nombre=="" || nombre == null) {
        msn = "El nombre no puede estar en blanco";
        

    }
    if (pass=="" || pass==null || (pass.length>12 || pass.length<8)) {
        msn  += "\n Escriba una contraseña correcta. >8 digitos y <12 digitos";
        

    }
    document.querySelector("#mensaje").innerHTML= msn;
    document.querySelector("#mensaje").style.color="red";
    
})