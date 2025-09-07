function digitize(n) {
  let str = n.toString()
  let numStr = str.split('')
  return numStr.map(e => Number(e)).reverse()
}