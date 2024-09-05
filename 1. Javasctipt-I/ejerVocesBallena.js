let input = 'Hello world';
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray);
let resulString = resultArray.join('')
let firstLetter = resulString.charAt(0).toUpperCase();
let restOfString = resulString.slice(1);
let finalResult = firstLetter + restOfString;
console.log(finalResult);