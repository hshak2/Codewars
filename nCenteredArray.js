function isCenteredN(arr,n){
if(arr.length === 0) return n === 0;
if(arr.reduce((a,b)=>a+b)===n) return true
for(let i=1;i<=~~(arr.length/2);i++){
    if(arr.slice(i,-i).reduce((a,b)=>a+b,0)===n) return true
  }
 return false
}