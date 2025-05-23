function cubeOdd(arr) {


    if(arr.every(el => Number.isInteger(el)) !== true){
      return undefined
    }else{
      let arr2 = arr.filter(ele => ele % 2 !== 0)
      return arr2.reduce((acc, c) => acc + c**3, 0)
    }
    
    return 0;
    }