String.prototype.camelCase=function(){
  //method for func --> converts string to camelCase (all words first letter capitalized & spaces removed)
  //always str; always more than one word; no empty str; no null, undefined or bool
  //return str camelCase
  //hello case -> HelloCase
  //camel case word -> CamelCaseWord
  //split(' ') map(e => e[0].toUpperCase() + e[1]).join('')
  return this.split(' ').map(e => e.slice(0, 1).toUpperCase() + e.slice(1)).join('')
}