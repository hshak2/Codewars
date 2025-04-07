function calcType(a, b, res) {
    // your code here
    if(a + b === res){
      return 'addition'
    }else if(a - b === res || b - a === res){
      return 'subtraction'
    }else if(a * b === res){
      return 'multiplication'
    }else if(a / b === res || b / a === res){
      return 'division'
    }
  }