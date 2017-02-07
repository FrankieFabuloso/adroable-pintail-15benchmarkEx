import readlineSync from 'readline-sync'

const secretNumber = parseInt(Math.random() * 100)
let playerGuess = undefined
let score = 0

console.log('Hello!')
console.log('Lets play a fun game!')
console.log('I\'ll pick a number between 1 and 100...')
console.log('Let\'s see how long it takes you to guess it!')

while( playerGuess != secretNumber ){
  console.log('Pick a number between 1 and 100...')
  playerGuess = readlineSync.question('\t----> ')
  if( playerGuess > secretNumber){
    console.log('\tAwww FART! You guessed to high mr dude!')
  } else if ( playerGuess < secretNumber ){
    console.log('\tBUMMER! Too low sista frend...')
  } else {
    console.log('\tYOU WINN CHAMP!')
    console.log('It took you ' + score + ' times to win.')
  }
}
