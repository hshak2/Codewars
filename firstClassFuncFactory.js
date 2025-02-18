function factory(x){
    return function otherFunc([...arr]){
      let z = arr.map((y) => y * x)
      return z
    }
    
    
}