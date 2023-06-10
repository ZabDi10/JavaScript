function calculoEdad(){
    let edad = document.getElementById("edad").value;
    console.log(edad);
    if(edad < 0 || edad > 110 || edad == ""){
        let msnError = "No has puesto bien tu edad"
        document.getElementById("msnError").innerHTML = msnError;
    }else{
        let mensaje;
        if(edad<12){
            mensaje = "Todavia eres muy pequeño";
        }else if(edad<19){
            mensaje = "Eres adolescente";
        }else if(edad<35){
            mensaje = "Sigues siendo joven";
        }else if(edad == 110){
            mensaje = "Te quedan menos de tres telediarios"
        }else{
            mensaje = "Cuidate mucho";
        }
        document.getElementById("mensaje").innerHTML = mensaje;
    // }else{
    //     if(edad>=18){
    //         //Bloque de instrucciones
    //         ++edad;
    //         let cumple = "El año que viene tendras " + edad;
    //         let mensaje = "Ya puedes ir a la Disco";
    //         document.getElementById("mensaje").innerHTML = cumple + " años. " + mensaje;
    //     }else{
    //         let mensaje;
    //         if(edad == 0){
    //             mensaje = "Si ni has nacido."
    //         }
    //         mensaje += " Espera un poco";
    //         document.getElementById("mensaje").innerHTML = mensaje;
}}
