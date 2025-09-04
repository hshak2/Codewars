function ensureQuestion(s) {
  let str = s.split('')
  if(str[str.length - 1] === '?'){
    return s
  }else{
    return `${s}?`
  }
}