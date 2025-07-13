function removeRotten(bagOfFruits){
  if(!bagOfFruits) { return []; }
  
  return bagOfFruits.map(function(fruit) {
    return fruit.replace("rotten", "").toLowerCase();
  });
}