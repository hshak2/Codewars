function trickyDoubles(n){
    var nStr = n.toString();
    if ((nStr.length % 2 == 1) || (nStr.slice(0, nStr.length / 2) != nStr.slice(nStr.length / 2,))) {
      return n * 2;
    } else {
      return n;
    }
  }