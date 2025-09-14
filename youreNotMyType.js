Array.prototype.ofType = function (type) {
  return this.filter(item => {
    if (typeof item === 'object' || typeof item === 'function') {
      return item instanceof type
    } else {
      return typeof item === type.name.toLowerCase()
    }
  })
}