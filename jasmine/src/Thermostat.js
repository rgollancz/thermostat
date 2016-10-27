function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.PSM_ON_MAX_TEMPERATURE = 25
  this.PSM_OFF_MAX_TEMPERATURE = 32
  this.HIGH_USAGE = 25
  this.MEDIUM_USAGE = 24
  this.LOW_USAGE = 17
  this._temperature = this.DEFAULT_TEMPERATURE;
  this._powerSaving = true
};
Thermostat.prototype.currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  if (this.isAtMaximum()) throw "Cannot increase above maximum temperature"
  this._temperature++
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.isAtMinimum()) throw "Cannot decrease below minimum temperature";
  this._temperature--
};

Thermostat.prototype.resetTemperature = function () {
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.isAtMinimum = function() {
  return this.currentTemperature() <= this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isAtMaximum = function() {
  return this.currentTemperature() >= this.maximumTemperature();
};

Thermostat.prototype.maximumTemperature = function() {
  if (this.isPowerSavingOn()) return this.PSM_ON_MAX_TEMPERATURE;
  return this.PSM_OFF_MAX_TEMPERATURE;
};

Thermostat.prototype.powerSavingOff = function() {
  this._powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  if (this._temperature > this.PSM_ON_MAX_TEMPERATURE) this.powerSaveTemperatureReset();
  this._powerSaving = true;
};

Thermostat.prototype.powerSaveTemperatureReset = function () {
  this._temperature = this.PSM_ON_MAX_TEMPERATURE;
};

Thermostat.prototype.powerSavingStatus = function () {
  if (this._powerSaving === true) return "On";
  if (this._powerSaving === false) return "Off";
};

Thermostat.prototype.isPowerSavingOn = function () {
  return this._powerSaving === true;
};

Thermostat.prototype.energyUsage = function () {
  if (this.currentTemperature() <= this.LOW_USAGE) return 'low-usage'
  if (this.currentTemperature() <= this.MEDIUM_USAGE) return 'medium-usage'
  if (this.currentTemperature() >= this.HIGH_USAGE) return 'high-usage'
};
