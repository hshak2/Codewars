// write the function isAnagram
var isAnagram = function(test, original) {
  //true two arg are anagrams; return false if not
  //always str, no num, no bool, no spaces, casing does not matter
  //true or false
  //loop through each str, convert to arr, every method, includes
  
//   let orig = original.toLowerCase().split('')
//   let tested = test.toLowerCase().split('')
//   if(orig.every(v => tested.includes(v)) !== true){
//     return false
//   }else{
//     return true
 //  }
  if(original.toLowerCase().split('').sort().join() === test.toLowerCase().split('').sort().join()){
    return true
  }else{
    return false
  }
  
};