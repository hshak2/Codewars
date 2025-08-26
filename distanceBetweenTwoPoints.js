function distanceBetweenPoints(a, b) {
  return Math.round(1e6 * Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2)) / 1e6;
}