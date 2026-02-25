function menFromBoys(arr){
  let even = arr.sort((a, b) => a - b).filter(e => e % 2 === 0)
  let odd = arr.sort((a, b) => b - a).filter(e => e % 2 !== 0)
  let unique = [...new Set(even.concat(odd))]
    return unique
}