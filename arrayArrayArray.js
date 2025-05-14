function explode(x){
    let y = x.filter(item => typeof item === 'number')
    let b = []
    if(y.length === 0){
      return 'Void!'
    }else if(y.length === 2){
      let z = y.reduce((acc, c) => acc + c, 0)
      for(let i = 1; i <= z; i++){
       b.push(x)
      }
      return b
        }else if(y.length === 1){
        for(let i = 1; i <= y[0]; i++){
         b.push(x)
      }
          return b
    }
  }