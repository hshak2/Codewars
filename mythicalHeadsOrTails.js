function beasts(heads, tails){
    //Make Hercules happy!
    for(let i = 0; i <= tails; i++){
      if( (i * 5 + (tails- i) * 2) == heads){
        return [tails- i,i];
      }
    }
    return 'No solutions';
  }