function catalog(s, article) {
  return s.split("\n").filter(line=>line.includes(article)).map(format).join('\r\n') || 'Nothing'
} 

const format = line => line.replace( '<prx>', ' prx: $' ).replace( '<qty>', ' qty: ').replace( '</name>', ' >').replace(/<[^>]*>/g, '');