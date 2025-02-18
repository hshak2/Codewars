// function reOrdering(text){
//   let otherWord = text.split(' ')
// for(let i = 0; i < otherWord.length; i++){
  
//   if(otherWord[i] == otherWord[i].toUpperCase()){
//     return otherWord.splice(0, 0, otherWord[i])
//   }
// }
//   //your code here
// }
const reOrdering = (text) => {
    const words = text.split(' ');
    const capitalWord = words.find(word => word[0] === word[0].toUpperCase());
    return [capitalWord, ...words.filter(word => word !== capitalWord)].join(' ');
  }