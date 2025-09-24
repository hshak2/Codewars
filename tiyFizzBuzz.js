function tiyFizzBuzz(sentence){
  
const sait = ["e", "u", "i", "o", "a"];

const checkSaitUpperCase = (n) => sait.includes(n.toLowerCase()) && n == n.toUpperCase() ? "Iron Yard" : "";
const checkSaitLowerCase = (n) => sait.includes(n.toLowerCase()) && n == n.toLowerCase() ? "Yard" : "";
const checkSamitUpperCase = (n) => !sait.includes(n.toLowerCase()) && n == n.toUpperCase() ? "Iron" : "";
const checkSamitLowerCase = (n) => !sait.includes(n.toLowerCase()) && n == n.toLowerCase() ? n : "";
  
  
return sentence.split("").map((x) => checkSaitLowerCase(x) || checkSamitLowerCase(x) || checkSaitUpperCase(x) || checkSamitUpperCase(x)).join("")
}