function sumDigits(number) {
    let num = Math.abs(number)
    let nums = num.toString().split('').reduce((acc, c) => acc + +c, 0)
    return nums
  }