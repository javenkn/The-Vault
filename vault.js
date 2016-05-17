'use strict';
module.exports = function() {
  var vaultValue = null;
  return {
    //setValue function sets the value in the vault
    setValue: function(key, value){
      vaultValue = value;
    },
    //getValue function returns value if there is a key
    //returns null if a key doesn't exist
    getValue: function(key){
      if(key !== null)
        return vaultValue;
      else
        return null;
    }
  };
};