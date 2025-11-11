function getCount(str) {
  let arr = 'aeiou'
  return str.split('').filter(e => arr.split('').includes(e)).length
}