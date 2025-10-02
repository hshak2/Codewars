function bandNameGenerator(str) {
  if(str[0] === str[str.length - 1]){
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}${str.slice(1)}`
  }else{
    return `The ${str.slice(0, 1).toUpperCase()}${str.slice(1)}`
  }
}