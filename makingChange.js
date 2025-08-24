const makeChange = (amount) => {
  const coins = [{H: 50}, {Q: 25}, {D: 10}, {N: 5}, {P: 1}];
  let result = {};
  coins.forEach(coin => {
    const value = coin[Object.keys(coin)[0]];
    const key = Object.keys(coin)[0];
    const count = Math.floor(amount / value);
    if (count > 0) {
      result[key] = count
      amount = amount % value;      
    }
  })
  return result
};