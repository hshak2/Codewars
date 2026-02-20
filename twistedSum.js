function twistedSum(n) {
let arr = []
for(let i = 0; i <= n; i++){
  arr.push(i)
}
  return arr.map(e => String(e)).join('').split('').reduce((acc, c) => acc + Number(c), 0)
}