function esrever(str) {
  let other = str.split('').reverse().join('')
  let another = other.split('').shift()
  let otherStr = other.concat(another)
  if(str.length > 0){
    return otherStr.slice(1, otherStr.length)
  }else{
    return ''
  }
  
}