function multiplyAll(arr) {
    return function argument(x){
      return arr.map(element => element * x)
    }
  }