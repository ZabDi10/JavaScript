let seleccion = document.querySelector("#formCto");
let mensajeError = document.querySelector("#mensaje");
let msn = "";
/*Declaramos los div */
let divTel = document.querySelector(".telOculto");
let divEmail = document.querySelector(".emailOculto");
let divCorreo = document.querySelector(".postalOculto");
seleccion.addEventListener("change", () => {
    let valorSeleccion = seleccion.value;
    switch (valorSeleccion) {
        case "telefono": {
            alert("Hoola telefono");
            divTel.style.display = "block";
            divCorreo.style.display = "none";
            divEmail.style.display = "none";
            break;
        }
        case "email": {
            alert("Hoola email");
            divTel.style.display = "none";
            divCorreo.style.display = "none";
            divEmail.style.display = "block";
            break;
        }
        case "correo": {
            alert("Hoola correo");
            divTel.style.display = "none";
            divCorreo.style.display = "block";
            divEmail.style.display = "none";
            break;
        }

        default:
            break;
    }
});

/* Leer el resto del formulario */
let boton = document.querySelector("#boton");
let nombre = document.querySelector("#fname");
let apellido = document.querySelector("#lname");
let mensaje = document.querySelector("#subject");
//Si pulsa al boton leera los datos y valida
boton.addEventListener("click", () => {

    console.log(nombre);
    msn = "";
    document.querySelector("#divP").style.backgroundColor = "red";
    validarNombre(nombre);
    validarApe(apellido);
    validarForCto(mensaje);
    let inputs = document.querySelectorAll(".entrada");
    console.log(inputs);
    inputs.forEach(items => {
        items.addEventListener("focus", () => {
            mensajeError.innerHTML = " ";
            nombre.style.background = "#cfa455";
            nombre.style.borderColor = "";
            nombre.setAttribute("placeholder", "Nombre");
            apellido.style.background = "#cfa455";
            apellido.style.borderColor = "";
            apellido.setAttribute("placeholder", "Apellido");
            document.querySelector("#divP").style.backgroundColor = ""

        })
    })

});

//Funciones validar
function validarNombre(nombre) {
    if (nombre.value == null || nombre.value == "" || nombre.value == " ") {
        msn += "Indique un nombre valido <br>";
        mensajeError.style = "red";
        nombre.style.background = "pink";
        nombre.style.borderColor = "red";
        nombre.setAttribute("placeholder", "Escribe bien tu nombre......");
        mensajeError.innerHTML = msn;
    }
}
function validarApe(apellido) {
    if (apellido.value == null || apellido.value == "" || apellido.value == " ") {
        msn += "Indique un apellido valido <br>";
        mensajeError.style = "red";
        apellido.style.background = "pink";
        apellido.style.borderColor = "red";
        apellido.setAttribute("placeholder", "Escribe bien tu apellido......");
        mensajeError.innerHTML = msn;
    }
}
function validarForCto(mensaje) { }

//Dejar todo de serie al pinchar en un input
let inputs = document.querySelectorAll(".entrada");
console.log(inputs);
inputs.forEach(items => {
    items.addEventListener("focus", () => {
        mensajeError.innerHTML = " ";
        nombre.style.background = "#cfa455";
        nombre.style.borderColor = "";
        nombre.setAttribute("placeholder", "Nombre");

    })
})

//Crear efecto sobre las imagenes
let imagenes = document.querySelector("#fomrCto");
/**Declaramos los div ocultos */
imagenes.forEach(img=>{
    img.addEventListener("mouseover", ()=>{
        img.style.width="35%";

    });
    img.addEventListener("mouseout", ()=>{
        img.style.width="auto";
    });
})
