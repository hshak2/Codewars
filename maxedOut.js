function maxedOut(arr) {
  let cubed = arr.reduce((acc, c) => acc + Math.pow(c, 3), 0)
  if(cubed <= Number.MAX_SAFE_INTEGER){
    return cubed
  }else{
    return "You've pushed me to the max!"
  }
}