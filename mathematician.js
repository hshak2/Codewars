// function calculate(num, otherNum) {
// const sum = num.reduce((acc, c) => acc + c, 0)
// const sumTwo = otherNum.reduce((acc, c) => acc + c, 0)

// return sum + sumTwo
// }
const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((s, v) => s + v);