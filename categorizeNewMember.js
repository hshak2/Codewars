function openOrSenior(data){
  return data.map(e => e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open')
}