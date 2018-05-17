
// function expression
var sayHi = function(name) {
  return  `hi ${name}`
}
// arrow function
var sayHi = (name) => {
  return `hi ${name}`
}
var sayHi = name => `hi ${name}`


// before es6 function expression
var sayHi = function() {
  return `hi`
}
// arrow
var sayHi = () => {
  return `hi`
}

const languages = ['ruby', 'js', 'php']

var upcasedLanguages = languages.map(function(lang) { 
  return lang.toLowerCase()
})

var newLang = languages.map(lang => lang.toUpperCase())


