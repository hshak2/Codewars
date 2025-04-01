function cutIt(arr){
    //coding here...
    let mappedNums = arr.map(element => element.length).sort((a, b) => a - b)
    return arr.map(element => element.slice(0, mappedNums[0]))
    
    
  }