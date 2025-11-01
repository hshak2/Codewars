var humanYearsCatYearsDogYears = function(humanYears) {
  if(humanYears <= 1){
    return [humanYears, 15, 15]
  }else if(humanYears === 2){
    return [humanYears, 15 + 9, 15 + 9]
  }else if(humanYears >= 3){
    return [humanYears, 15 + 9 + 4 * (humanYears - 2), 15+ 9 + 5 * (humanYears- 2)]
  }
}
