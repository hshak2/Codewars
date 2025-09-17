function minMinMax(array) {
  let arr = []
  let sorted = array.sort((a, b) => a - b)
  for(let i = sorted[0]; i < sorted[sorted.length - 1]; i++){
    if(sorted.includes(i) !== true){
      arr.push(i)
    }
  }
  return [sorted[0], arr[0], sorted[sorted.length - 1]]
}