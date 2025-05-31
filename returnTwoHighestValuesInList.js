function twoHighest(arr) {
    let arr2 = arr.sort((a, b) => b - a)
    let arr3 = arr2.filter((item, index) => arr2.indexOf(item) === index)
    if(arr3.length === 0){
      return []
    }else if(arr3[0] !== arr3[1] && arr3.length > 1){
      return [arr3[0], arr3[1]]
    }else{
      return [arr3[0]]
    }
   
    
  }