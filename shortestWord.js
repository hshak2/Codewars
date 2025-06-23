function findShort(s){
    let str = s.split(' ').map(ele => ele.length).sort((a, b) => a - b)
    return str[0]
  }