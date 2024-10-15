// Rock Paper Scissors Game
// Sunt doi jucatori
// Fiecare alege aleatoriu o optiune
// In consola se afiseaza rezultatul jocului

interface Options {

}

const options: Options = {
  rock: {
    beats: ['scissors'],
    flavorText: ['crushes'],
  },
  paper: {
    beats: ['rock'],
    flavorText: ['covers'],
  },
  scissors: {
    beats: ['paper'],
    flavorText: ['cuts'],
  }
};

export default function play() {
  let outcomeText = '';
  return outcomeText;
}

function getRandomIndex(max = 2) {
  return Math.floor(Math.random() * (max + 1));
}
