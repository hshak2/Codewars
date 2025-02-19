class Cat extends Animal {
    constructor(name){
      super(name);
    }
      speak(){
        return `${this.name} meows.`
      }
    }
    const c = new Cat('Mr Whiskers')
    c.speak();