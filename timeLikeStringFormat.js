function solution(hour) {
  if(hour.toString().length > 2 && hour.toString().length < 4){
    return hour.toString().slice(0, 1) + ':' + hour.toString().slice(1)
  }else if(hour.toString().length > 3 && hour.toString().length < 5){
    return hour.toString().slice(0, 2) + ':' + hour.toString().slice(2)
  }else{
    throw new Error('raise an exception')
  }

}