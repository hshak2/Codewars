function positiveSum(arr) {
    const initialValue = 0
   const positive = arr.filter((num) => num > 0).reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
   return positive
  }