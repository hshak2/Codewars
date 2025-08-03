function balance(left, right) {
  let leftSum = left.split('').map(e => e.replace('?', 3)).map(e => e.replace('!', 2)).reduce((acc, c) => +acc + +c, 0)
  let rightSum = right.split('').map(e => e.replace('?', 3)).map(e => e.replace('!', 2)).reduce((acc, c) => +acc + +c, 0)
  if(leftSum < rightSum){
    return 'Right'
  }else if(leftSum > rightSum){
    return 'Left'
  }else{
    return 'Balance'
  }
}