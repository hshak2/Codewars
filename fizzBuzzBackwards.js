function reverseFizzBuzz(array) {
  indexFizz = array.indexOf("Fizz");
  indexBuzz = array.indexOf("Buzz");
  indexFizzBuzz = array.indexOf("FizzBuzz");

  if(indexFizz== -1) {
    indexFizz = indexFizzBuzz;
  }

  if(indexBuzz == -1) {
    indexBuzz = indexFizzBuzz;
  }  
  
  if(indexFizz + indexBuzz == -2) {
    indexfizz = indexBuzz = indexFizzBuzz;
  }
  
  return [indexFizz + 1, indexBuzz + 1];
};