$(document).ready(function() {
  var thermostat = new Thermostat();
  // includes &units query for celsius and GET request include API key from OPen Weather user
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=f6e19caa7e9f1aa46c13c1147d24cf9f", function(data) {
    var message = ("Weather: "+ data.main.temp+"°C");
    $('#weather_today').append(message);
  });

  updateTemperature();

  $('#current_city').submit(function(e) {
    e.preventDefault();
    var city = $(this).serialize();
    var city = city.substr(5,15)
    // console.log(city);
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=f6e19caa7e9f1aa46c13c1147d24cf9f"
    // console.log(url)
    $.get(url, function(data) {
      var message = ("Weather: "+ data.main.temp+"°C");
      $('#weather_today').html(message);
    });
  });

  $('#power_save_status').text(thermostat.powerSavingStatus());

  $('#temperature_up').click(function() {
      thermostat.increaseTemperature();
      updateTemperature();
  });

  $('#temperature_down').click(function() {
    thermostat.decreaseTemperature();
      updateTemperature();
  });

  $('#temperature_reset').click(function() {
    thermostat.resetTemperature();
      updateTemperature();
  });

  $('#power_save_on').click(function() {
    thermostat.powerSavingOn();
      $('#power_save_status').text(thermostat.powerSavingStatus());
      updateTemperature();
  });

  $('#power_save_off').click(function() {
    thermostat.powerSavingOff();
      $('#power_save_status').text(thermostat.powerSavingStatus());
  });

  function updateTemperature() {
    $('#current_temperature').text(thermostat.currentTemperature());
    $('#current_temperature').attr('class', thermostat.energyUsage());
  };

});
