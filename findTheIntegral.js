function integrate(coefficient, exponent) {
    let intExponent = Number(exponent) + 1
    let intCoefficient = Number(coefficient) / intExponent
    return `${intCoefficient}x^${intExponent}`
  }