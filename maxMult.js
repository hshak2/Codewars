function maxMultiple(divisor, bound){
    //your code here
    let N
      let modResult = bound % divisor
      N = bound - modResult
      return N
  }