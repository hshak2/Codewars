function evenLast(numbers) {
    // Good luck
    const evenIndex = numbers.filter((element, index) => index % 2 === 0)
    const mult = evenIndex.map(element => element * numbers[numbers.length - 1])
    const sum = mult.reduce((acc, c) => acc + c, 0)
    return sum
  
  }