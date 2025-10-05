Math.degrees=function(n){
  return Math.round((n*180/Math.PI)*100)/100+'deg';
}
Math.radians=function(n){
  return Math.round((n*Math.PI/180)*100)/100+'rad';
}