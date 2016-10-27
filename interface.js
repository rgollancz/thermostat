$(document).ready(function() {
  var thermostat = new Thermostat();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=f6e19caa7e9f1aa46c13c1147d24cf9f", function(result) {
    var message = ("Weather: "+ result.weather[0].main);
    $('#weather_today').append(message);
  });

  updateTemperature();

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
