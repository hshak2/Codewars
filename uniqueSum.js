function uniqueSum(lst){
let arr = lst.filter((item, index) => lst.indexOf(item) === index);
  if(lst.length > 0){
      return arr.reduce((acc, c) => acc + c, 0)
  }else{
    return null
  }


}