function highAndLow(numbers){
//str of space separated nums -> highest and lowest
//always nums, singular space, not ordered
  //return highest and lowest num in a str, separated singular space
let arr = numbers.split(' ').sort((a, b) => a - b)
return `${arr[arr.length - 1]} ${arr[0]}`
}