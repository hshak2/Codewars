function initializeNames(name){

  const words = name.split(" ");
  
  if(words.length >= 3) {
    
    const firstName = words.shift();
    const lastName = words.pop();
    const initialName = words.map(words => `${words.charAt(0).toUpperCase()}.`).join(" ");
    
    return `${firstName} ${initialName} ${lastName}`;
  }else {
    return name;
  }
}