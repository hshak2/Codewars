function chain(x, functions) {
	functions = functions || [];
  functions.forEach(function(fn) {
  	x = fn(x);
	});
  return x;
}