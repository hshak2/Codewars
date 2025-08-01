function areaOfPolygonInsideCircle(r, s) {
  let angle = Math.PI / s
  let area = r * r * s * Math.sin(angle * 2) / 2
  return +area.toFixed(3)
}
//added this extra line just for the green square because it has been a difficult day so will do an extra kata tomorrow