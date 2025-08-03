function prod2sum(a, b, c, d) {
  let [m, u, v, n ] = [ 
    b * c - a * d, 
    a * c + b * d, 
    b * d - a * c, 
    a * d + b * c ]
  .map(t => Math.abs(t))
  .sort((a, b) => a - b);

  return m === u 
       ? [[m, n]]
       : [[m, n], [u, v]];
}