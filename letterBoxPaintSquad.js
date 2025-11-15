var paintLetterboxes = function(start, end) {
  let returnedArr = [0,0,0,0,0,0,0,0,0,0];
  let paintedArr = [];
  for(let i = start; i <= end; i++) {
    paintedArr.push(i);
  }
  let bigString = paintedArr.join('');
  for(let i = 0; i < bigString.length; i++) {
    returnedArr[bigString[i]] += 1;    
  }
  return returnedArr;
}