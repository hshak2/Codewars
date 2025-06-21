var AmIAfraid = function(day, num){
    if(day.toLowerCase() === 'monday'){
      if(num === 12){
        return true
      }else{
        return false
      }
    }else if(day.toLowerCase() === 'tuesday'){
      if(num > 95){
        return true
      }else{
        return false
      }
    }else if(day.toLowerCase() === 'wednesday'){
      if(num === 34){
        return true
      }else{
        return false
      }
    }else if(day.toLowerCase()=== 'thursday'){
      if(num === 0){
        return true
      }else{
        return false
      }
    }else if(day.toLowerCase() === 'friday'){
      if(num % 2 === 0){
        return true
      }else{
        return false
      }
    }else if(day.toLowerCase() === 'saturday'){
      if(num === 56){
        return true
      }else{
        return false
      }
    }else if(day.toLowerCase() === 'sunday'){
      if(num === 666 || num === -666){
        return true
      }else{
        return false
      }
    }
    
  }