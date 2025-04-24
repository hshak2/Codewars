function distinct(a) {
    let seen = {}
    return a.filter(function(item){
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    })
  
  }