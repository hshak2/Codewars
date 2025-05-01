function reverseLetter(str) {
    //coding and coding..
    let alphaStr = str.replace(/[^a-zA-Z]/g, '');
    return alphaStr.split('').reverse().join('')
    
    
  }