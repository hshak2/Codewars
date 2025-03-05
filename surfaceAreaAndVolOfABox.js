function getSize(width, height, depth){
    let SA
    if(width === height && width === depth){
      SA = 6 * width * width
    }else{
      SA = 2 * depth * width + 2 * depth * height + 2 * width * height
    }
      let vol = width * height * depth
      return [SA, vol]
  }