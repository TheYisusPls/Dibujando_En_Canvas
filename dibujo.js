//estas son mis variables
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

//separacion de variables canvas y formularios
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujoPorClick()
{
  //variable que guarda el valor dado por el usuario en la caja de texto
  var lineas = parseInt(texto.value);
  //variables de numeros a utilizar
  var l = 0;
  var yi, xf;
  var yf, xi;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;


  for(l = 0; l < lineas; l++)
  //aqui estoy dibujando las lineas en el plano cartesiano
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 00, yi, xf, 300);
  }

  //aqui estoy dibujando el marco de mi canvas
  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
  dibujarLinea(colorcito, 1, 1, 299, 1);
  dibujarLinea(colorcito, 299, 1, 299, 299);
  

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  //esta funcion me permite dibujar lineas sin tener que hacerlas una por una
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }

}
