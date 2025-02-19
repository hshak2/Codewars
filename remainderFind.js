function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    let z
    if(m > n && n !== 0){
      z = m % n
      return z
    }else if( n > m && m !== 0){
      z = n % m
      return z
    }else if(m === n && m !== 0){
      z = m % n
      return z
    }else if(m === 0 || n === 0){
      return NaN
    }
  }