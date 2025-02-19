function isLochNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
  
    if(s.includes(' three fifty')){
      return true     
             }else if(s.includes(' $3.50 ')){
               return true
             }else if(s.includes(' 3.50')){
               return true
             }else if(s.includes('3.50 ')){
               return true
             }else if(s.includes('tree fiddy')){
               return true
             }else{
      return false
    }
  }