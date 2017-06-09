let number = require('lodash/number');

module.exports = {
  name: "Generator",
  description: "grille method : generate a random loto grid - bonus method : generate a random bonus number",
  grille: () => {
    let numbers = [];
    let tirage = 0;
    for (i=0; i<5; i++) {
      do {
        tirage = number.random(1,49);
        //équivaut à => tirage = Math.floor((Math.random() * 49) + 1);
      } while (numbers.indexOf(tirage) !== -1);
      numbers.push(tirage);
    }
    return numbers;
  },
  bonus: () => {
    return number.random(1,10);
    //équivaut à => bonus = Math.floor((Math.random() * 10) + 1);
  }
};