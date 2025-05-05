function strongEnough(earthquake, age) {
    let decreased = 1000 * Math.pow((1 - .01), age)
    let reduced = earthquake.map(element => element.reduce((acc, c) => acc + c, 0))
    let otherReduced = reduced.reduce((acc, c) => acc * c, 1)
    if(otherReduced < decreased){
      return "Safe!"
    }else{
      return "Needs Reinforcement!"
    }
  //your code here
  
  }