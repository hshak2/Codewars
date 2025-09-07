function mergeArrays(a, b) {
  const concatArr = a.concat(b)
  const result = concatArr.filter((item, idx) => concatArr.indexOf(item) === idx)
  return result.sort((a, b) => a - b)
}
