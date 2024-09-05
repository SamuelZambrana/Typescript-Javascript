let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  const greenEnergy = spaceship => {
    spaceship['Fuel Type'] ='avocado oil';
  };
  
  const remotelyDisable = spaceship => {
    spaceship.disabled = true;
  };
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);
  