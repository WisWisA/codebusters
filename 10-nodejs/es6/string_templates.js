function greeting(name = 'dt') {
  // return 'hello ' + name // before es6
  return `hello ${ name }` // es6
}

function greet(person) {
  // return person.firstname + ' ' + person.lastname // before es6
  return `${person.firstname} ${person.lastname}`
}

console.log(greet({ firstname: 'mike', lastname: 'goodwin' }))