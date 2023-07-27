/**
 * 
 * Cuando la ventana o el documento sea leido, o ha cargado, invocamos un evento en la pagina
 * 
 * objeto.
 * window.addEventListener("accion", function)
 * La funcion que tiene que invoacar en esta estructura no lleva()
 * window.addEventListener("load", function)
 * 
 */

addEventListener("load", saludar)
function saludar() {
   console.log("Hola")
}
addEventListener("load", function() {
    console.log(this.document);
    let card2 = this.document.getElementById("card-2");
    console.log(card2);
    let elements = this.document.getElementsByTagName("p");
    console.log(elements);

    /* convertir un htmlCollection en array para manipular 
    * Existen dos maneras:
        1. let elements[...document.getElementsByTagName("p")];
        2. let elements = Array.from(document.getElementsbyTagName("p"))
    */
    let elementsDiv = [...this.document.getElementsByTagName("div")];
    console.log(elementsDiv);

    let elementsParrafo = Array.from(this.document.getElementsByTagName("p"))
    console.log(elementsParrafo);

    let primerP = elementsParrafo[1];
    primerP.style.cursor = "pointer"
    // let cuartoD = elementsDiv[4];
    // let tercerD = elementsDiv[3];
    // let segundoD = elementsDiv[2];
    // let primerD = elementsDiv[1];
    // primerD.style.backgroundColor= "blue"
    // primerD.style.color = "white"



    /* Acceder a los elementos siguiendo un evento */
    primerP.addEventListener("click", function () {
        primerP.style.backgroundColor = "blue";
    });
    let segundoP = elementsParrafo[1];



    /**
     * Una funcion anonima, es decir function() se puede utilizar de la siguiente manera ()=>{
     *      codigo
     * }
     */
    let boton = this.document.getElementById("boton");
    
        
    boton.addEventListener("click",()=>{
        let primerD = elementsDiv[1];
        let segundoD = elementsDiv[2];
        let tercerD = elementsDiv[3];
        tercerD.style.backgroundColor = "green"
        segundoD.style.backgroundColor = "yellow"
        primerD.style.backgroundColor = "red"
        let cuartoD = elementsDiv[4];
        let quintoD = elementsDiv[6];
        cuartoD.style.backgroundColor= "blue"
        cuartoD.style.color = "white"
        tercerD.style.color = "white"
        segundoD.style.color = "black"
        primerD.style.color = "white"
        quintoD.style.backgroundColor = "black"
        
        let colorRed = random(255);
        let colorBlue = random(255);
        let colorGreen = random(255);
        let colorFondo = "rgba(" + colorRed +"," + colorGreen + "," + colorBlue + ",0.5)";
        console.log(colorFondo);
        this.document.body.style.backgroundColor=colorFondo;

        encabezados.forEach(cambiarColor2);
    });

    /**
     * Cambiar colo del titulo de la caja 3 si pulsa click sobre el titulo
     */

    let encabezados = Array.from(document.getElementsByClassName("titulo"));
    console.log(encabezados);
    tercerEncabezado = encabezados[2];
    tercerEncabezado.style.cursor="pointer";
    tercerEncabezado.addEventListener("click", () =>{
        tercerEncabezado.style.color="white";
    })


    /*Cambiar el titulo de todos los encabezados */
    let titulo4 = encabezados[3]
    
    titulo4.style.cursor="pointer";
    titulo4.addEventListener("click", ()=>{
        encabezados.forEach(cambiarColor);
    })


    /**
     * Cambiar la letra a cursiva de los parrafos cuando pulses clic en el Primer parrado
     */

    primerP=elementsParrafo[0];
    primerP.style.cursor = "pointer";
    primerP.addEventListener("click", () => {
        elementsParrafo.forEach( item => item.style.fontFamily = "italic" )
    })

    //Cambiar la opacidad de un div entero
    let quintoDiv = elementsDiv[5];
    quintoDiv.addEventListener("mouseover", ()=>{
        quintoDiv.style.opacity="0.5";
    })
    quintoDiv.addEventListener("mouseout", ()=>{
        quintoDiv.style.opacity="1";
    })
});

function random(numero) {
    return Math.floor(Math.random()*(numero+1));
}
function cambiarColor(item, index) {
    item.style.color ="blue";
}
function cambiarColor2(item, index) {
    item.style.color ="white";
    if (index==1) {
        item.style.color ="black";
    }
}


