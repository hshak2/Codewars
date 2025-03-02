function isIsogram(str){
    let set = new Set();
      let repeat = true;
      let s = str.toLowerCase()
      for(let i= 0; i< s.length; i++){
        if(set.has(s[i])){
          repeat = false;
          break;
        }
        set.add(s[i]);
        
      }
      return repeat
      //...
    }