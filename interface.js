$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#current_temperature').text(thermostat.currentTemperature());

  $('#power_save_status').text(thermostat.powerSavingStatus());

  $('#temperature_up').on("click", function() {
      thermostat.increaseTemperature();
      $('#current_temperature').text(thermostat.currentTemperature());
  });

  $('#temperature_down').on("click", function() {
    thermostat.decreaseTemperature();
      $('#current_temperature').text(thermostat.currentTemperature());
  });

  $('#temperature_reset').on("click", function() {
    thermostat.resetTemperature();
      $('#current_temperature').text(thermostat.currentTemperature());
  });

  $('#power_save_on').on("click", function() {
    thermostat.powerSavingOn();
      $('#power_save_status').text(thermostat.powerSavingStatus());
      $('#current_temperature').text(thermostat.currentTemperature());
  });

  $('#power_save_off').on("click", function() {
    thermostat.powerSavingOff();
      $('#power_save_status').text(thermostat.powerSavingStatus());
  });

});
