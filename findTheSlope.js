function slope(points)
{
let ans = (points[3] - points[1]) / (points[2] - points[0])
if(points[2] - points[0] === 0){
  return 'undefined'
}else{
  return String(ans)
}
}