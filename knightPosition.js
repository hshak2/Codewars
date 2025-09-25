function possiblePositions([a, b]) {

  const keys = 'abcdefgh';
  const row = b - 1;
  const col = keys.indexOf(a);
  const moves = [
    [ col - 2, row - 1 ],
    [ col - 2, row + 1 ],
    [ col - 1, row - 2 ],
    [ col - 1, row + 2 ],
    [ col + 1, row - 2 ],
    [ col + 1, row + 2 ],
    [ col + 2, row - 1 ],
    [ col + 2, row + 1 ]
  ];

  return moves
    .filter(pos => pos.every(n => n >= 0 && n < 8))
    .map(([ x, y ]) => keys[x] + (y + 1));

}