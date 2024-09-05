const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 4;
    } else if (day === 'saturday') {
      return 9;
    } else if (day === 'sunday') {
      return 10;
    } else {
      return 'Error: Por favor, ingrese un día válido.';
    }
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  };
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours ) {
      console.log('Durmio la cantidad de horas perfecta de sueño');
    } else if (actualSleepHours >= idealSleepHours) {
      console.log('Durmio mas de la cuenta');
    } else {
      console.log('Deberia descansar un poco');
    }
  }
  
  console.log(getSleepHours());
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  calculateSleepDebt()