function isHappy(n) {
  let arr = []
  while (n !== 1 && arr.indexOf(n) === -1) {
    arr.push(n);
    n = n.toString().split('').reduce((acc, c) => +acc + c **2, 0)
  }
  return n === 1;
}