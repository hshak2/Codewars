function invertHash(hash) {
    const result = {};
     for(let prop in hash) {
       if(hash.hasOwnProperty(prop)) {
         result[hash[prop]] = prop
       }
     }
     return result
   }