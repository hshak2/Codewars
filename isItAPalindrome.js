function isPalindrome(x) {
    let str = x.split('').reverse().join('')
    if(x.toLowerCase() === str.toLowerCase()){
      return true
    }else{
      return false
    }
  }