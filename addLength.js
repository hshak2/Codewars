function addLength(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }