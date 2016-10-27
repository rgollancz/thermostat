$(document).ready(function() {
  var thermostat = new Thermostat();

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
