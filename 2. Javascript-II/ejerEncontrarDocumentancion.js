// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
    // En el agrumento de .repeat introducimos el numero de veces que quiere que ser repita la string.
    return string.repeat(2);
  }
  
  // Should return 'echoecho'
  console.log("doubleString('echo') returns: " + doubleString('echo'));
  