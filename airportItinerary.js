const itinerary = travel => {
  const res = []
  
  for(let route of travel) {
    Object.values(route).forEach(val => {
      if(res[res.length - 1] !== val) res.push(val)
    })
  }
  
  return res.join('-')
}