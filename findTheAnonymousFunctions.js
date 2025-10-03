function FindFunction(func, arr) {
  let f = func.filter(e => typeof e === 'function')
  return arr.filter(f[0])
}