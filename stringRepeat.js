function repeatStr (n, s) {
    if(n < 0){
      return '';
    }else if(n === 1){
      return s
    }else{
      return s + repeatStr(n - 1, s)
    }
    }