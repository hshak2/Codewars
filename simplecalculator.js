function calculator(a,b,sign){
    if(typeof a === 'number' && typeof b === 'number' && sign === '+'){
      return a+b
    }else if(typeof a === 'number' && typeof b === 'number' && sign === '-'){
      return a-b
    }else if(typeof a === 'number' && typeof b === 'number' && sign === '*'){
      return a*b
    }else if(typeof a === 'number' && typeof b === 'number' && sign === '/'){
      return a/b
    }else if(typeof a === 'number' && typeof b === 'number' && sign === '%'){
      return a%b
    }else{
      return 'unknown value'
    }
    
    }