class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    get info(){ //look up get info() function
      return `${this.name}s age is ${this.age}`
    } 
  }