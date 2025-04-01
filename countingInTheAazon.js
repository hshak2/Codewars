function countArara(n) {
    //your code here
    let count = [];
    for (let i = 2; i <= n; i+=2) {
      count.push("adak");
    }
    if (n % 2 != 0) { count.push("anane"); }
    
    return count.join(" ");
}