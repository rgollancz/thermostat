(function(exports) {
  function TemperaturePersister($) {
    this._$ = $;
  };

  TemperaturePersister.prototype = {
    get: function(callback) {
      this._$.get("/temperature", function(response){
        callback(response.temperature);
      });
    },

    set: function(temperature, callback) {
      this._$.post("/temperature", {temperature: temperature}, callback);
    }
  };
  exports.TemperaturePersister = TemperaturePersister;
})(this);
