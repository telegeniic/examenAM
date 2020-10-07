const txtCiudad = document.getElementById("txtCiudad");

const lblActual = document.getElementById("lblActual");
const lblMinima = document.getElementById("lblMinima");
const lblMaxima = document.getElementById("lblMaxima");

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", function () {
  if (txtCiudad.value === "") {
    alert("Favor de introducir una ciudad");
    txtCiudad.value = "";
  } else {
    llamada();
    txtCiudad.value = "";
  }
});

function llamada() {
  getApiData(txtCiudad.value);
}

function showWeather(data) {
  let kl = data.actual;
  let cs = kl - 273.15;
  lblActual.innerText = cs.toFixed(2) + "\xB0 C"; //https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places
  kl = data.max;
  cs = kl - 273.15;
  lblMaxima.innerText = cs.toFixed(2) + "\xB0 C"; //http://www.javascripter.net/faq/mathsymbols.htm
  kl = data.min;
  cs = kl - 273.15;
  lblMinima.innerText = cs.toFixed(2) + "\xB0 C";
}
