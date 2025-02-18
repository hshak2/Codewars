function whoIsPaying(name){
    //your code here
    let small = name.slice(0, 2)
    if(name.split('').length <= 2){
      return [name]
    }else if(name.split('').length > 2){
      return [name, small]
    }
  }