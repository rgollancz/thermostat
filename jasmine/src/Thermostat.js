function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.HIGH_USAGE = 25
  this.MEDIUM_USAGE = 24
  this.LOW_USAGE = 17
  this._temperature = this.DEFAULT_TEMPERATURE;
  this._powerSaving = true
}
Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  if (this.atMaximum()) throw "Cannot increase above maximum temperature"
  this._temperature++
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.atMinimum()) throw "Cannot decrease below minimum temperature";
  this._temperature--
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.atMinimum = function() {
  return this.currentTemperature() <= this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.atMaximum = function() {
  return this.currentTemperature() >= this.maximumTemperature();
};

Thermostat.prototype.maximumTemperature = function() {
  if (this._powerSaving) return 25;
  return 32;
};

Thermostat.prototype.powerSavingOff = function() {
  this._powerSaving = false
};

Thermostat.prototype.powerSavingOn = function() {
  this._powerSaving = true
};

Thermostat.prototype.energyUsage = function () {
  if (this.currentTemperature() <= this.LOW_USAGE) return 'low-usage'
  if (this.currentTemperature() <= this.MEDIUM_USAGE) return 'medium-usage'
  if (this.currentTemperature() >= this.HIGH_USAGE) return 'high-usage'
};
