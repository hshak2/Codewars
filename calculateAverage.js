function findAverage(array) {
    // your code here
    let arr = array.reduce((acc, c) => acc + c, 0)
    if(array.length === 0){
      return 0
    }else if(array.length > 0){
      return arr / array.length
    }
  
  }