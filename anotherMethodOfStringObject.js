function alienLanguage(str){
    let wordz = str.split(' ')
    return wordz.map(ele => ele.slice(0, ele.length - 1).toUpperCase() + ele.slice(ele.length -1).toLowerCase()).join(' ')
  
    
  }