/*efecto tecla*/
function presionar(tecla) {
  tecla.target.style.transform = "scale(0.9,0.9)";
}

function soltar(tecla) {
  tecla.target.style.transform = "scale(1,1)";
}

function ejecutar() {
  var teclas = document.getElementsByTagName('img');

  for (i = 0; i < teclas.length; i++) {


    teclas[i].addEventListener("mousedown", presionar);
    teclas[i].addEventListener("mouseup", soltar);


  }
}
ejecutar();



/*imprimir numero */


var cero = document.getElementById("0");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var punto = document.getElementById('punto');
var pantalla = document.getElementById("display");

/*validar puntos*/

/*punto.addEventListener("click", function() {
  if (pantalla.textContent != "0")
    pantalla.textContent += ".";


})*/


/*comprobar puntos*/

punto.addEventListener("click",function(){
   var n=pantalla.textContent.indexOf(".");
   if (n!=-1) {
   }else{
     if (pantalla.textContent == "0")
       pantalla.textContent += ".";
   }
})


/*numeros*/
cero.addEventListener("click", function() {
  if (pantalla.textContent != "0") {
    pantalla.textContent += "0";
  }
})


uno.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "1";
  else
    pantalla.textContent += "1";
})


dos.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "2";
  else
    pantalla.textContent += "2";
})


tres.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "3";
  else
    pantalla.textContent += "3";
})

cuatro.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "4";
  else
    pantalla.textContent += "4";
})
cinco.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "5";
  else
    pantalla.textContent += "5";
})

seis.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "6";
  else
    pantalla.textContent += "6";
})

siete.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "7";
  else
    pantalla.textContent += "7";
})

ocho.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "8";
  else
    pantalla.textContent += "8";
})
nueve.addEventListener("click", function() {
  if (pantalla.textContent == "0")
    pantalla.textContent = "9";
  else
    pantalla.textContent += "9";
})

/*Limpiar display*/
var borrar = document.getElementById("on");
borrar.addEventListener("click", limpiar);

function limpiar(e) {
  pantalla.textContent = '0';

}
