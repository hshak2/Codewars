function alphabetPosition(text) {
//given string -> replace every letter with its pos in alphabet
  //if not letter, then ignore
  //return position in alphabet -> return in a string
  //"the" => '20 8 5'
  let str = 'abcdefghijklmnopqrstuvwxyz'
  //text -> filter 
  let textOnly = text.split('').filter(char => /[a-zA-Z]/.test(char))
  let numsOnly = textOnly.map(e => str.split('').indexOf(e.toLowerCase()))
  return numsOnly.map(e => e + 1).join(' ')
}