function whoWon(players, extraCard, extraTakers) {
  const scores = [];

  // Add players with their scores to the scores array
  for (const [key, value] of Object.entries(players)) {
    const cards = value.split(",").map((str) => parseInt(str) || 10);
    const score = cards[0] + cards[1];
    scores.push([key, score]);
  }

  // Add extra card to takers
  for (const entry of scores) {
    if (extraTakers.includes(entry[0])) {
      entry[1] += parseInt(extraCard) || 10;
    }
  }

  // Determine players with busts and no busts
  const busts = [];
  const noBusts = [];
  for (const entry of scores) {
    if (entry[1] > 21) {
      busts.push(entry);
    } else {
      noBusts.push(entry);
    }
  }

  // Sort the busts (ascending)
  busts.sort((a, b) => a[1] - b[1]);
  // Sort the normal results (descending)
  noBusts.sort((a, b) => b[1] - a[1]);

  const result = noBusts.concat(busts);

  // Sort alphabetically when there's a draw
  return result.sort((a, b) => {
    if (a[1] == b[1] && a[0].localeCompare(b[0]) < 0) {
      return -1;
    }
  });
}