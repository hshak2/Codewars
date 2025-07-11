function borrow(s){
  const punctuation = [".", ",", "!", "?", ";", ":"];
  let result = "";
  let a = s.toLowerCase()
  for (let i = 0; i < a.length; i++) {
    let char = a[i];
    if (!punctuation.includes(char)) {
      result += char;
    }
  }
  return result.split(' ').join('')
}