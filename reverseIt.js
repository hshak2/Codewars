function reverseIt(data){
  switch (typeof data){
  case 'string':return data.split("").reverse().join("");
  case 'number':return parseFloat(String(data).split("").reverse().join(""));
  default: return data;
  }
 }