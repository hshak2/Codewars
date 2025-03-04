function countSheeps(sheep) {

    const frequency = (sheep, item) => {
      return sheep.filter(x => x === item).length
    }
    return frequency(sheep, true)
  }