// animals name toys

class Animal {

  constructor(name = 'dt') { // initialize
    this.name = name // privacy?? nop!!!
    this.toys = 'blah blah blah'
  }

  getName() {
    return this.name.toUpperCase()
  }

}

var a1 = new Animal() // dt
var a2 = new Animal('codebusters')
var a3 = new Animal('haha')

console.log(a1.name)
console.log(a2.getName())
