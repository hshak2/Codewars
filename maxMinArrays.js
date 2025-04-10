function solve(arr) {
    arr = arr.slice().sort((x,y) => x-y)
    let ans = []
    while (arr.length) {
      ans.push(arr.pop())
      if (arr.length) ans.push(arr.shift())
    }
    return ans
  }