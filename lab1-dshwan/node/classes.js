// declaring classes in js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Something {
  constructor(name) {
    this.name = name;
    this.myName = 7;
  }

  hello() {
    console.log(this.name)
  }
}

const s = new Something('tim');
s.hello();

// for practice

// Create a subclass
class SubClass extends Something {
  constructor() {
    super('asd');
  }
}

const subclass = new SubClass();
subclass.hello();

// add a property after the object has been instantiated

// add a static function
