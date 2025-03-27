function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let score = classPoints.reduce((acc, c) => acc + c, 0) / classPoints.length
    if(score < yourPoints){
      return true
    }else{
      return false
    }
  }
  