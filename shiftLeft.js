function shiftLeft(s, t){

    let counter = 0;
  
      while(Math.min(s.length, t.length) > 0) {
  
          if (s === t) {
              return counter;
          }
  
          if (s !== t && s.length > t.length) {
              s = s.substring(1);
              counter += 1;
          }
  
          if (s !== t && t.length > s.length) {
              t = t.substring(1);
              counter += 1;
          }
  
          if (s !== t && t.length === s.length) {
              s = s.substring(1);
              t = t.substring(1);
              counter += 2; 
          }
      }
  
      return counter;
  }