function average(scores) {

    return Math.round(scores.reduce((acc, c) => acc + c, 0) / scores.length)
  }