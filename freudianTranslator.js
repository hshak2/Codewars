function toFreud(string) {
  if(string !== ''){
    return string.split(' ').map(e => e.replace(e, 'sex')).join(' ')
  }else{
    return ''
  }
}