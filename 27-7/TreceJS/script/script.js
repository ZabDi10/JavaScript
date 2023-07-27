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
    let imc = document.querySelector("#imc").innerHTML=" ";
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

        console.log(calculo.toFixed(2));

        
        //Toda la cadena de ifs
        if (calculo <= 18.5) {
            mImc = `Tu IMC es de ${calculo.toFixed(2)}. Tienes bajo peso`
            document.querySelector("#imc").style.color="blue"
        }else if (calculo <=24.9) {
            mImc = `Tu IMC es de ${calculo.toFixed(2)}. Tienes un peso adecuado`
            document.querySelector("#imc").style.color="blue"
        }else if (calculo <=29.9) {
            mImc = `Tu IMC es de ${calculo.toFixed(2)}. Tienes sobrepeso`
            document.querySelector("#imc").style.color="green"
        }else if (calculo <=34.9 ) {
            mImc = `Tu IMC es de ${calculo.toFixed(2)}. Tienes obesidad tipo 1`
            document.querySelector("#imc").style.color="yellow"
        }else if (calculo <=39.9) {
            mImc = `Tu IMC es de ${calculo.toFixed(2)}. Tienes obesidad tipo 2`
            document.querySelector("#imc").style.color="#FF8F35"
        }else if(calculo >=40){
            mImc = `Tu IMC es de ${calculo.toFixed(2)}. Tienes obesidad tipo 3. En cualquier caso necesitas adelgazar`
            document.querySelector("#imc").style.color="red"
        }else if (calculo===Infinity) {
            mImc = `Tu IMC es de ${calculo.toFixed(2)}. Te crees el centro del universo EH!`
            document.querySelector("#imc").style.color="red"
        }else{
            if (calculo=="" || isNaN(calculo)) {
                mImc = "Ponga los valores que aparecen en pantalla. El Peso en Kilogramos y la Altura en Metros por favor";
                document.querySelector("#imc").style.color="red";
            }
        }

        if (isEmpty(mImc)) {
            
            document.querySelector("#imagen").src="../IMC-05.png";
        }
        document.querySelector("#mensaje").innerHTML= msn;
        document.querySelector("#mensaje").style.color="red";
        document.querySelector("#imc").innerHTML= mImc;
        
        let inputs=document.querySelectorAll(".entrada");

        inputs.forEach(items=>{
            items.addEventListener("focus",()=>{
                mensaje.innerHTML =" ";
                // msn=" ";
            })
        }) 


    })
})


function isEmpty(msg) {
    if(msg != null){
        return true;
        
    }else{
        return false;
    }
}   

