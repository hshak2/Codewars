function shorterReverseLonger(a,b){
  let arr = a.split('')
  let arr2 = b.split('')
  if(arr.length > arr2.length){
    return `${arr2.join('')}${arr.reverse().join('')}${arr2.join('')}`
  }else if(arr.length === arr2.length){
    return `${arr2.join('')}${arr.reverse().join('')}${arr2.join('')}`
  }else{
    return `${arr.join('')}${arr2.reverse().join('')}${arr.join('')}`
  }

}