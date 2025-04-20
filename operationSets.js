function process2Arrays(arr1, arr2) {
    // your code here
  const filteredArr = arr1.filter(item => arr2.includes(item))

  const leftArr1 = arr1.filter((el) => !arr2.includes(el))
  const leftArr2 = arr2.filter((ele) => !arr1.includes(ele))
  const add = leftArr1.length + leftArr2.length
    return [filteredArr.length, add, leftArr1.length, leftArr2.length];
}