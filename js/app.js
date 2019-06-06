/*efecto tecla*/



var Calculadora = {
  init: function() {


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
    var sign = document.getElementById('sign');
    var resta = document.getElementById('menos');
    var suma = document.getElementById('mas');
    var por = document.getElementById('por');
    var dividido = document.getElementById('dividido');
    var igualdad = document.getElementById('igual');
    var maximo = "cantidad maxima";


    /*limitar longitud*/
    function limitar(numero) {

      if (pantalla.innerHTML.length < 8) {
        if (pantalla.innerHTML == "0") {
          pantalla.innerHTML = numero;
        } else {
          pantalla.innerHTML += numero;
        }
      }
    }



    /*comprobar puntos*/

    punto.addEventListener("click", function() {
      var n = pantalla.textContent.indexOf(".");
      if (n != -1) {} else {
        if (pantalla.textContent >= "0")
          pantalla.textContent += ".";
      }
    })
    /*signo negativo*/

    sign.addEventListener("click", function() {
      var n = pantalla.textContent.indexOf("-");
      if (n != -1) {
        var z = pantalla.textContent.slice(1);
        pantalla.textContent = z;
        /*Funciona de la misma froma*/
        /*pantalla.textContent= pantalla.textContent.slice(1);*/
      } else {
        if (pantalla.textContent != "0")
          pantalla.textContent = "-" +
          pantalla.textContent;
      }
    })
    /*operaciones aritmeticas*/

    menos.addEventListener("click", function() {
      operando1 = pantalla.textContent;
      operador = "-";
      pantalla.textContent = "";
      console.log(operando1);
      console.log(pantalla);
      /*limitar("-");*/
    })
    suma.addEventListener("click", function() {
      /*limitar("+");*/
      operando1 = pantalla.textContent;
      operador = "+";
      pantalla.textContent = "";
      console.log(operando1);
      console.log(pantalla);
      /*limitar("+");*/

    })

    por.addEventListener("click", function() {

      operando1 = pantalla.textContent;
      operador = "*";
      pantalla.textContent = "";


    })
    dividido.addEventListener("click", function() {
      operando1 = pantalla.textContent;
      operador = "/";
      pantalla.textContent = "";

    })

    /*igual*/
    igualdad.addEventListener("click", function() {
      operando2 = pantalla.textContent;
      operaciones(operador);

      /*  if (operador.length <= 8) {
            operador = pantalla.textContent;
            console.log(operador);
          } else {
            pantalla.textContent=maximo;
            console.log(operador);
          }*/

    })


    /*numeros*/
    cero.addEventListener("click", function() {
      /*  if (pantalla.textContent != "0") {
          pantalla.textContent += "0";
        }*/

      limitar("0");
    })



    uno.addEventListener("click", function() {

      /*  if (pantalla.textContent == "0")
          pantalla.textContent = "1";
        else
          pantalla.textContent += "1";*/
      limitar("1");

    })


    dos.addEventListener("click", function() {
      /*  if (pantalla.textContent == "0")
          pantalla.textContent = "2";
        else
          pantalla.textContent += "2";*/

      limitar("2");
    })


    tres.addEventListener("click", function() {
      /*  if (pantalla.textContent == "0")
          pantalla.textContent = "3";
        else
          pantalla.textContent += "3";*/

      limitar("3");
    })

    cuatro.addEventListener("click", function() {
      /*if (pantalla.textContent == "0")
        pantalla.textContent = "4";
      else
        pantalla.textContent += "4";*/
      limitar("4");

    })
    cinco.addEventListener("click", function() {
      /*  if (pantalla.textContent == "0")
          pantalla.textContent = "5";
        else
          pantalla.textContent += "5";*/

      limitar("5");
    })

    seis.addEventListener("click", function() {
      /*  if (pantalla.textContent == "0")
          pantalla.textContent = "6";
        else
          pantalla.textContent += "6";*/

      limitar("6");
    })

    siete.addEventListener("click", function() {
      /*if (pantalla.textContent == "0")
        pantalla.textContent = "7";
      else
        pantalla.textContent += "7";*/
      limitar("7");
    })

    ocho.addEventListener("click", function() {
      /*if (pantalla.textContent == "0")
        pantalla.textContent = "8";
      else
        pantalla.textContent += "8";*/
      limitar("8");
    })
    nueve.addEventListener("click", function() {
      /*  if (pantalla.textContent == "0")
          pantalla.textContent = "9";
        else
          pantalla.textContent += "9";*/

      limitar("9");
    })

    /*Limpiar display*/
    var borrar = document.getElementById("on");
    borrar.addEventListener("click", limpiar);

    function limpiar(e) {
      pantalla.textContent = '0';
    }
    /*operaciones */
    function operaciones(op) {

      var operacion;
      switch (operador) {
        case "+":
          res = parseFloat(operando1) + parseFloat(operando2);
          pantalla.textContent = res.toString().substring(0, 8);
          console.log(res);
          break;
        case "-":
          res = parseFloat(operando1) - parseFloat(operando2);
          pantalla.textContent = res.toString().substring(0, 8);
          break;
        case "*":
          res = parseFloat(operando1) * parseFloat(operando2);
            pantalla.textContent = res.toString().substring(0, 8);
        /*  if (res.length <= 8) {
            pantalla.textContent = res;
          } else {
            pantalla.textContent = maximo;
            console.log(pantalla);
            console.log(pantalla.textContent)
          }*/
          break;
        case "/":
          res = parseFloat(operando1) / parseFloat(operando2);
          pantalla.textContent = res.toString().substring(0, 8);
          break;
      }

    }
  }
}
Calculadora.init();
