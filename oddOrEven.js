function oddOrEven(array) {
  if(array.reduce((acc, c) => acc + c, 0) % 2 === 0){
    return 'even'
  }else{
    return 'odd'
  }
}