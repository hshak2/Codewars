function stringMerge(string1, string2, letter){
    // Add code here :)
    let a = string1.indexOf(letter)
    let b = string2.indexOf(letter)
    let c = string1.slice(0, a)
    let d = string2.slice(b)
    return `${c}${d}`
  }