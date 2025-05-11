function solve(a,b){
    //..
    let arr = []
    let arr2 = []
    for(let item of a){
      if(!b.includes(item)){
        arr.push(item)
      }
    }
    for(let other of b){
      if(!a.includes(other)){
        arr2.push(other)
      }
    }
    return arr.concat(arr2).join('')
  };