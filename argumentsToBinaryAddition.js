function arr2bin(arr){
  let array = arr.filter(ele => typeof ele === 'number')
  return array.reduce((acc, c) => acc + c, 0).toString(2)
}