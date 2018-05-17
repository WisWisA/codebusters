function greeting(name) {
  if (name != null || name != undefined) {
    name = 'dt'
  }
  return 'hello ' + name
}

function greeting(name = 'dt') {
  return 'hello ' + name
}

console.log( greeting() )

function greet(person) {
  return person.firstname + ' ' + person.lastname
}

console.log(greet({ firstname: 'd', lastname: 't' }))
