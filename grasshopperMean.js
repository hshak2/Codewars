function findAverage(nums) {
    // Code here
    let arrOfNums = [...nums].reduce((acc, c) => acc + c, 0)
    return arrOfNums / (nums.length)
  }