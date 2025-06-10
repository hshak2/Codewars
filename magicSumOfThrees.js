function magicSum(numbers) {
    return numbers.reduce((total, num) => {
      if(num % 2 !== 0 && String(num).includes('3')){
        total += num
      }
      return total
    },0)
  }