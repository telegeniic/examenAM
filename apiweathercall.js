function getApiData(ciudad) {
  apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ciudad +
    "&appid=e1426c2255e5bef7b6308041d98ffefb";
  var request = new XMLHttpRequest();
  request.open("GET", apiURL, true);
  request.send();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.response;
      var myData = JSON.parse(data);
      let values = {
        actual: myData.main.temp,
        max: myData.main.temp_max,
        min: myData.main.temp_min,
      };
      showWeather(values);
    }
  };
}
