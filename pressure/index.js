var Pressure = require('pressure');

Pressure.set('#polyfill-example', {
    change: function(force, event){
      this.innerHTML = force;
    },
    unsupported: function(){
      alert("Oh no, this device does not support pressure.")
    }
  }, {polyfill: false});