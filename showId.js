// function showMe(yourID) {
//   if(yourID.split('-').length > 1 && yourID.indexOf('-') > -1 && yourID.split('-').includes('') != true && yourID !== yourID.toLowerCase()){
//     return true
//   }else if(yourID.split('-').forEach(element => element.length === 1) && yourID.index('-') > -1){
//     return false
//   }
//   else if(yourID.split(' ').length == 1 && yourID.indexOf('-') > -1){
//     return false
//   }else if(yourID.split(' ').length == 1 || yourID.indexOf('-') > -1){
//     return true
//   }else if(yourID.split(' ').length > 1 || yourID.indexOf('-') == -1){
//     return false
//   }else{
//     return false
//   }
// }
function showMe(yourID) {
    if (typeof yourID !== 'string' || yourID.includes(' ')) 
      return false;
  
    const regex = /^[A-Z][a-z]+$/
  
    return yourID.split('-').every(name => regex.test(name))
  }