function GeometricSequenceSum(firstVal, ratio, length) {
    let prev = firstVal;
    let sum = firstVal;
    
    for (let i = 2; i <= length; i++) {
      const next = prev * ratio;
      sum += next;
      prev = next;
    }
    
    return sum;
  }