function triangleArea(triangle){

  let ax=triangle.a.x,
      bx=triangle.b.x,
      cx=triangle.c.x,
      ay=triangle.a.y,
      by=triangle.b.y,
      cy=triangle.c.y;
  return parseFloat(0.5*(Math.abs((ax-cx)*(by-ay)-(ax-bx)*(cy-ay))))
}