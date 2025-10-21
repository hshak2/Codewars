function shuffleIt(arr, ...exchanges){
  exchanges.forEach(([i, j]) => [arr[i], arr[j]] = [arr[j], arr[i]]);
  return arr;
}