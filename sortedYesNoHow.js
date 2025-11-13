function isSortedAndHow(array) {
let asc = true;
let des = true;
  for(let i = 1; i < array.length; i++) {
    if(array[i] > array[i-1]) des = false;
    if(array[i] < array[i-1]) asc = false;
  }
  return asc ? 'yes, ascending' : des ? 'yes, descending' : 'no'
}