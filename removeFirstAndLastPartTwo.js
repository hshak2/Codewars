function array(string) {
  if(string.split(',').length > 2){
    return string.split(',').slice(1, string.split(',').length - 1).join(' ')
  }else{
    return null
  }
  
}