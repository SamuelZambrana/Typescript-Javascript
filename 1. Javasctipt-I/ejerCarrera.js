
let raceNumber = Math.floor(Math.random() * 1000);
let registro = false;
let edad = 10;
if (raceNumber >= 18 && registro) {
  raceNumber += 1000;
  console.log(`Tu número de carrera es ${raceNumber}. Competirás a las 9:30 a.m. ¡Buena suerte!`);
} else if (raceNumber > 18 && !registro) {
  console.log(`Tu número de carrera es ${raceNumber}. Competirás a las 11:00 a.m. ¡Buena suerte!`);
} else if (raceNumber < 18) {
  console.log(`Tu número de carrera es ${raceNumber}. Competirás a las 12:30 a.m. ¡Buena suerte!`);
} else {
    console.log(`Tu número de carrera es ${raceNumber}. ¡Buena suerte!`);
}
