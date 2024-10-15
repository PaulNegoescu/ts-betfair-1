// Rock Paper Scissors Game
// Sunt doi jucatori
// Fiecare alege aleatoriu o optiune
// In consola se afiseaza rezultatul jocului

const choices = ['rock', 'paper', 'scissors'] as const;

type Choices = (typeof choices)[number];

interface OptionConfig {
  beats: [Choices];
  flavorText: [string];
}

// type Options = {
//   [key in Choices]: OptionConfig;
// }

type Options = Record<Choices, OptionConfig>;

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

// const choices = Object.keys(options) as [Choices];

export default function play() {
  let outcomeText = '';

  const player1Choice = choices[getRandomIndex()];
  const player2Choice = choices[getRandomIndex()];

  if(player1Choice === player2Choice) {
    outcomeText = `It's a draw! Both selected: ${player1Choice}`;
  } else if (options[player1Choice].beats.includes(player2Choice)) {
    outcomeText = `Player 1 wins! ${capitalize(player1Choice)} ${options[player1Choice].flavorText[0]} ${player2Choice}`;
  } else {
    outcomeText = `Player 2 wins! ${capitalize(player2Choice)} ${options[player2Choice].flavorText[0]} ${player1Choice}`;
  }

  return outcomeText;
}

function getRandomIndex(max = 2) {
  return Math.floor(Math.random() * (max + 1));
}

function capitalize(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}
