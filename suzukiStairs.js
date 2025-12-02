function stairsIn20(s){

    let sum = 0
    let x = s.forEach(subArr => {
      sum += subArr.reduce((acc, val) => acc + val, 0)
    })
    return sum * 20
  }