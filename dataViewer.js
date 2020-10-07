const txtCiudad = document.getElementById("txtCiudad");

const lblActual = document.getElementById("lblActual");
const lblMinima = document.getElementById("lblMinima");
const lblMaxima = document.getElementById("lblMaxima");

const cityName = document.getElementById("cityName");

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", function () {
  if (txtCiudad.value === "") {
    alert("Favor de introducir una ciudad");
    txtCiudad.value = "";
  } else {
    llamada();
  }
});

txtCiudad.addEventListener("click", function () {
  document.getElementById("btnBuscar").style.display = "block";
});

function llamada() {
  getApiData(txtCiudad.value);
  document.getElementById("btnBuscar").style.display = "none";
}

function showWeather(data) {
  let kl = data.actual;
  let actual = kl - 273.15;
  lblActual.innerText = actual.toFixed(2) + "\xB0 C"; //https://stackoverflow.com/questions/3163070/javascript-displaying-a-float-to-2-decimal-places
  kl = data.max;
  let max = kl - 273.15;
  lblMaxima.innerText = max.toFixed(2) + "\xB0 C"; //http://www.javascripter.net/faq/mathsymbols.htm
  kl = data.min;
  let min = kl - 273.15;
  lblMinima.innerText = min.toFixed(2) + "\xB0 C";
  cityName.innerText = txtCiudad.value;
  changeBackground(actual);
  document.getElementById("showWeather").style.display = "block";
}

function changeBackground(actual) {
  if (actual > 20.0) {
    //https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
    document.body.style.backgroundImage =
      "url('http://es.hdwall365.com/wallpapers/1603/3D-pictures-farm-field-tractor-cock-house-sun_1920x1080_wallpaper.jpg')";
  } else {
    document.body.style.backgroundImage =
      "url('https://s1.1zoom.me/b5051/394/Snow_Branches_Trees_Fence_515060_1920x1080.jpg')";
  }
}
