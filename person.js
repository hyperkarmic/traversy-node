console.log(__dirname, __filename)

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greeting() {
    console.log(`My Name is ${this.name} and I am ${this.age}`)
  }
}

module.exports = Person
//module wrapper function???? - important concept
//ES6 node features...modern imports absent???
//ie import Person from './person' does not work
//above the ES6 approach to imports - but node uses Common
