function incrementer(nums) { 
  //given an array of digits -> return an array with each diigt incremented by position in the array
  //[1, 2, 3] -> [1+ 1, 2+ 2, 3+ 3]
  if(nums.length > 0){
    let num = nums.map((e, i) => e + (i + 1))
    let anotherNum = num.map(e => e.toString().length > 1 ? e.toString().slice(1) : e.toString())
    return anotherNum.map(e => Number(e))
  }else{
    return []
  }
}