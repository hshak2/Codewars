function cutIt(arr){

    let short = arr.map(ele => ele.length).sort((a, b) => a - b)
    return arr.map(ele => ele.slice(0, short[0]))
    
    
  }