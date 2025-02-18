function totalBill(str) {

    let otherStr = str.replace(/\s/g, '').length
    let modNum = otherStr % 5
    let newNum = (otherStr - modNum) / 5
    let someNum = otherStr - newNum
    if(otherStr <= 4){ //
      return 2 * otherStr //21 -> 21 % 5 = 1 --> 21 - 1 => 20 / 5 = 4 => 21 - 4 = 17
    }else if(otherStr >= 5){
      return 2 * someNum
    }
  }