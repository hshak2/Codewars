function stackHeight2d(layers) {
    if (layers <= 1) {
      return layers;
    } else {
      return (Math.sqrt(3)*(layers-1)/2+1).toFixed(3);
    }
  }