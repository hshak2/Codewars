function sumMul(n,m){
    if(m <= 0 || n <= 0 ) {return "INVALID";}
    let res = 0;
    for(let i = 0; i < m; i+= n){
    res += i;}
    return res;
    }