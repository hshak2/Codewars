const leastLarger = (a, i) =>
  a.indexOf(Math.min(...a.filter(val => val > a[i])));