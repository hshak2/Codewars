function age(x, y){

    let brother 
    let age
    brother = age / y
    age = brother + x
    //age = (age / y) + x
    //age - x = (age / y)
  //   y(age - x) = age
    //y * age - y * x = age
    //y * age - age = y * x
    //age(y - 1) = y * x
  
    age = (y * x)/ (y - 1)
    return age
    
  
  }