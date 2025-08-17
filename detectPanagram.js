function isPangram(string){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let str = string.toLowerCase().split('')
  if(alphabet.every(v => str.includes(v)) === true){
    return true
  }else{
    return false
  }
}