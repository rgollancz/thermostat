$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#current_temperature').text(thermostat.currentTemperature());

});
