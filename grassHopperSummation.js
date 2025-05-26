let summation = function (num) {
  let arr = []
  for(let i = 1; i <= num; i++){
    arr.push(i)
  }
  return arr.reduce((acc, c) => acc + c, 0)
}