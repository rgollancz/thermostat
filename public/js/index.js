(function(){
  window.addEventListener("load", function(){
    var temperatureUp = document.getElementById("temperature_up");
    var temperaturedown = document.getElementById("temperature_down");

    new Thermostat(temperatureUp, new TemperaturePersister($), );

  });
});
