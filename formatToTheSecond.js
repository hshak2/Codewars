function printNums(...args) {
    const strs = args.map(String)
    const maxLen = strs.reduce((a, b) => Math.max(a, b.length), 0)
    return strs.map(s => s.padStart(maxLen, '0')).join('\n')
  }