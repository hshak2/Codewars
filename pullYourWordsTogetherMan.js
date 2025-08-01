function sentencify(words) {
  words[0].split('').slice(0, 1).map(ele => ele.toUpperCase())
  return words.join(' ').slice(0, 1).toUpperCase() + words.join(' ').slice(1).concat('.')

}