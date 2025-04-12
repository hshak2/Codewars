function stackHeight3d(layers) {
    if (layers > 0) {
      return Math.sqrt(2 / 3) * (layers - 1) + 1
    } else {
      return 0
    }
  }