function reverseWords(str) {
 return str.split(' ').map(ele => ele.split('').reverse().join('')).join(' ')
}