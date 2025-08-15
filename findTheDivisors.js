function divisors(integer) {
  let arr = []
  for(let i= 1; i <= integer; i++){
    arr.push(integer/i)
  }
  let result = arr.filter((e) => e % 1 === 0).sort((a, b) => a - b).slice(1)
  let remnant = result.pop()
  if(result.length > 0){
    return result
  }else{
    return `${integer} is prime`
  }
  
}