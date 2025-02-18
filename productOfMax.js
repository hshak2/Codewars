function maxProduct(numbers, size){
    //your code here
    let arrOfNum = [...numbers].sort((a, b) => b - a)
    let anotherArr = arrOfNum.slice(0, size)
    return anotherArr.reduce((acc, c) => acc * c, 1)
  }