function calculoDni(){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numero = document.getElementById("dni").value;
    console.log(numero);
    let calculo = numero%23;
    let letra = letras[calculo];
    document.getElementById("resultado").innerHTML = numero + "-" + letra;

}