// Write your code below
let bobsFollowers = ['grey', 'mary', 'james', 'ash'];
let tinasFollowers = ['grey', 'mary', 'rex'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log(mutualFollowers);
// Esta practica lo que hace es recorrer y comparar elementos de dos listas y sumar ese elemento repetido a una lista nueva vacia