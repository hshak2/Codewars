function comes_after(str,l) {
    const a = 'abcdefghijklmnopqrstuvwxyz';
    return str.split('').map((x,i) => x.toLowerCase() === l && str[i + 1] &&  a.includes(str[i+1].toLowerCase()) ? str[i+1] : '').join('')
  }