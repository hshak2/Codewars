function getMinMax(arr){
    //..
  if(arr.length > 2){
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    return [min, max]
  }else if(arr.length === 1){
      return [arr[0], arr[0]]
  }else if(arr.length > 1){
        let y = arr.sort((a, b) => a - b)
      return y
  }
  };