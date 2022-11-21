export const startYams = (dice1, dice2, dice3, dice4, dice5) => {
  if (
    dice1 === dice2 &&
    dice2 === dice3 &&
    dice3 === dice4 &&
    dice4 === dice5
  ) {
    return 5;
  } else if (
    (dice1 === dice2 &&
      dice2 === dice3 &&
      dice3 === dice4 &&
      dice1 === dice4) ||
    (dice2 === dice3 &&
      dice3 === dice4 &&
      dice4 === dice5 &&
      dice2 === dice5) ||
    (dice1 === dice2 &&
      dice2 === dice4 &&
      dice4 === dice5 &&
      dice1 === dice5) ||
    (dice1 === dice2 &&
      dice2 === dice3 &&
      dice3 === dice5 &&
      dice1 === dice5) ||
    (dice1 === dice3 && dice3 === dice4 && dice4 === dice5 && dice1 === dice5)
  ) {
    return 4;
  } else if (
    dice1 === dice2 ||
    dice2 === dice3 ||
    dice3 === dice4 ||
    dice4 === dice5 ||
    dice1 === dice3 ||
    dice1 === dice4 ||
    dice1 === dice5 ||
    dice2 === dice4 ||
    dice2 === dice5 ||
    dice3 === dice5
  ) {
    return 2;
  } else {
    return 0;
  }
};
