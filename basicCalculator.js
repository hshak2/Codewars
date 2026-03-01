function calculate(a, operator, b) {

  if(operator === '+'){
    return a + b
  }else if(operator === '-'){
    return a - b
  }else if(operator === '*'){
    return a * b
  }else if(operator === '/' && b !== 0){
    return a / b
  }else if(operator === '/' && b === 0){
    return null
  }else{
    return null
  }
}