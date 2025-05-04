function stringToIntArray(s){
    let arr = [""]
    let arr2 = s.split(",")
    return arr2.filter(item => !arr.includes(item)).map(item => Number(item))
  
  }