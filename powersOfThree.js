function largestPower(n){
  for(let i = 0; i <= n; i++ ){
    if(Math.pow(3, i) < n){
      continue;
    }
    return i-1;
  }
}