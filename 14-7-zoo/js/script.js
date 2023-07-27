let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

let arrayImg= new Array(4); //declarando que este array va a tener 4 elementos.
arrayImg[0]=new Image(); //
arrayImg[0].src="../Proyecto ZOO/img/fotaza-leones.webp";
arrayImg[1]=new Image(); //
arrayImg[1].src="../Proyecto ZOO/img/leopardo.webp";
arrayImg[2]=new Image(); //
arrayImg[2].src="../Proyecto ZOO/img/erizo.webp";
arrayImg[3]=new Image(); //
arrayImg[3].src="../Proyecto ZOO/img/suricato-abrazo.webp";

//Declaramos un contador que lleve la cuenta de la imagenes que se va mostrando y comienza en 1 y termina en 4;
let contador = 0;
function cambiarImagen(){
  document.querySelector("#banner").src=arrayImg[contador];
  console.log(contador);
  contador++;
  setTimeout("cambiarImagen()", 5000);
  if (contador==3) {
    contador=0;
  }
}

