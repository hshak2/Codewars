function datingRange(age){
    //return min-max
    let min, max
    if(age <= 14){
      min = age - .10 * age
      max = age + .10 * age
      return `${Math.floor(min)}-${Math.floor(max)}`
    }else{
      min = 7 + age /2
      max = 2 * (age - 7)
      return `${Math.floor(min)}-${Math.floor(max)}`
    }
  }