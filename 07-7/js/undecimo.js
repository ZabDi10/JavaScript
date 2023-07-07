const y =document.querySelector("h2"); //sustituye getElementByTagName

 

const x = document.querySelectorAll("#intro");//sustituye getElementById

 

const z = document.querySelectorAll(".intro");//sustituye getElementByClassName

 


/*
querySelector retorna el primero que encuentra

 

querySelectorAll retorna un Array con todos los elmentos que encuentra
*/

 

document.getElementById("demo1").innerHTML = 
'El primer objeto que tiene la etiqueta h2 : ' + y.innerHTML;

 

document.getElementById("demo2").innerHTML = 
'El primer objeto que tiene le id intro' + x[0].innerHTML;

 

document.getElementById("demo3").innerHTML = 
'El segundo objeto que tiene la clase intro ' + z[1].innerHTML;