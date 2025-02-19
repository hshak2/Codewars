function countSheeps(sheep) {
    // TODO
    const frequency = (sheep, item) => {
      return sheep.filter(x => x === item).length
    }
    return frequency(sheep, true)
  }