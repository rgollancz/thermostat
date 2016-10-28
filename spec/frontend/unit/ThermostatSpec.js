describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Temperature", function() {
    it("defaults to 20 degress", function () {
      expect(thermostat.currentTemperature()).toEqual(20);
    });

    it("can be increased", function() {
      thermostat.increaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(21);
    });

    it("can be decreased", function() {
      thermostat.decreaseTemperature();
      expect(thermostat.currentTemperature()).toEqual(19);
    });

    it("minimum is 10", function() {
      for (i = 1; i <= 10; i++) {thermostat.decreaseTemperature()}
      expect(function() {thermostat.decreaseTemperature()}).toThrow("Cannot decrease below minimum temperature")
    });

    it("can be reset", function() {
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.currentTemperature()).toEqual(20);
    });
  });

  describe("Power saving mode", function() {
    it("can be turned off", function() {
      thermostat.powerSavingOff();
      expect(thermostat._powerSaving).toEqual(false)
    });

    it("can be turned on", function() {
      thermostat.powerSavingOff();
      thermostat.powerSavingOn();
      expect(thermostat._powerSaving).toEqual(true)
    });

    it("maximum temperature is 25 when in power saving mode", function() {
      for (i = 20; i < 25; i++) {thermostat.increaseTemperature()}
      expect(function() {thermostat.increaseTemperature()}).toThrow("Cannot increase above maximum temperature")
    });

    it("maximum temperature is 32 when not in power saving mode", function() {
      thermostat.powerSavingOff();
      for (i = 20; i < 32; i++) {thermostat.increaseTemperature()}
      expect(function() {thermostat.increaseTemperature()}).toThrow("Cannot increase above maximum temperature")
    });
  });

  describe("Energy usage", function() {
    it("returns low-usage when temperature is below or equal to 17", function() {
      for (i = 1; i <= 3; i++) {thermostat.decreaseTemperature()}
      expect(thermostat.energyUsage()).toEqual("low-usage")
    });
    it("returns low-usage when temperature is below or equal to 24", function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage")
    });
    it("returns high-usage when temperature is above or equal to 25", function() {
      for (i = 1; i <= 5; i++) {thermostat.increaseTemperature()}
      expect(thermostat.energyUsage()).toEqual("high-usage")
    });
  })
});
