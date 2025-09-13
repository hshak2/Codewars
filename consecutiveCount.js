function getConsectiveItems(items, key) {
  items = items.toString();
  key = key.toString();
  let max = 0, current = 0;
  for (let c of items) {
    current = c == key ? current + 1 : 0;
    if (current > max)
      max = current;
  }
  return max;
}