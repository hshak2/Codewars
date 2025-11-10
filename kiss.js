function isKiss( words ){
  //determine if simple or complex; if simple -> length of each word != exceed amount of words
  //always str 
  //return Good job or KISS
  //convert to an arr; map method -> e -> e.length; 
  // if there is a value within arr > words.length -> Good job or KISS
  let word = words.split(' ').map(e => e.length)
  if(word.some(e => e > words.split(' ').length)){
    return 'Keep It Simple Stupid'
  }else{
    return 'Good work Joe!'
  }
}