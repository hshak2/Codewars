function areaOfPolygonInsideCircle(r, s) {
  let angle = Math.PI / s
  let area = r * r * s * Math.sin(angle * 2) / 2
  return +area.toFixed(3)
}