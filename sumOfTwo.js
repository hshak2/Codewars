function sumTwoSmallestNumbers(numbers) {  
    // Code here
    let sortedNum = numbers.sort((a, b) => a - b)
    return sortedNum[0] + sortedNum[1]
  }