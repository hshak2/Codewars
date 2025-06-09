const productArray = a => {
    const p = a.reduce((r, e) => r * e, 1);
    return a.map(e => p / e);
  }