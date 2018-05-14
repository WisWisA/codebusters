
// node ex1.js 1 2
// console.log(process.argv) // its an array
// ['node', 'ex1.js', '1', '2']
// ['1', '2']

// console.log(process.argv[2])

// write a CLI program that sums numbers passed in

// node ex1.js 1 2 3
// 6

// node ex1.js 2 2
// 4
var total = 0;

debugger

for (var i = 2; i < process.argv.length; i++) {
  total = total + Number(process.argv[i]);
}

console.log(total);