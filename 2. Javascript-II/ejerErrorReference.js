console.log('This message will be printed to the console.');

function throwError () {
  // Este error de reference indica que no esta definido la variable notDefinedVar
  return notDefinedVar;
}

// Call throwError() below:
throwError()

console.log('Because of the error, this will not be printed!');
