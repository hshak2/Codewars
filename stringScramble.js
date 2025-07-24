const scramble = (str, arr) =>
  arr.map((_, idx) => str[arr.indexOf(idx)]).join(``);