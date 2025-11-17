function sum (numbers) {
  //pos and neg num as well as floats and int;
  //return 0
  if(numbers.length > 0 ){
    return numbers.reduce((acc, c) => acc + c, 0)
  }else{
    return 0
  }
}