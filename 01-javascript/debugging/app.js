console.log('guessing game');

/*

Let's make a guessing game
setup a secret number

the user should be asked to guess a number
output a happy message if the guess is correct
output a sad message if guess is wrong, asked to guess the number again, until the end of time

- variables 
- if statement
- output
- loops
*/

var secret = 49;
var input;


while (input !== secret) {
  // prompt for input
  input = Number(prompt('enter a number between 1 - 50'));

  // magic number ????
  if (input === secret) {
    console.log('you lucky you');
  } else {
    // debugger
    console.log('try again');
  }
}

