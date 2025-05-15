function sortArray(a1, a2) {
    a1 = a1.map(e => e[0]).join('');
    return a2.sort((a,b) => a1.indexOf(a[0]) > a1.indexOf(b[0]));
  }