function reject(array, predicate) {
  let arr = array.filter(x => predicate(x))
  return array.filter(el => !arr.includes(el))
}