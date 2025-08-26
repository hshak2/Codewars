function areEqual(s1, s2){
  if (s1.size !== s2.size) return false;
  for (const element of s1) {
    if (!s2.has(element)) return false;
  }
  for (const element of s2) {
    if (!s1.has(element)) return false;
  }
  return true;
}

function notEqual(s1, s2){
  return !areEqual(s1, s2);
}