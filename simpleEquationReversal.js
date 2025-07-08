function solve(eq){
  
  //needet vars 
  let op = ""; // operands eg. 100
  let result = "";
  
  //iterate over the String
  for(let c of eq){
  
      //Detect if the char an Operator like +, - etc. 
      if (c === "+" || c === "-" || c === "*" || c=== "/"){
          result = c + op + result;
          op = "";
          continue;
      }
      
      //Build the Operand (e.g. 100 = 1+0+0)
      op = op + c;
  }

  //contact the last op and return
  return op + result;
  
}