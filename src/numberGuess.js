import readlineSync from 'readline-sync'


const guessingGame = () => {
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
    checkForWin(playerGuess, secretNumber)
    score++
  }
  console.log('It took you ' + score + ' times to win.')
}

const checkForWin = (guess, secretNumber) => {
  if( guess > secretNumber){
    console.log('\tAwww FART! You guessed to high mr dude!')
    return 'too high'
  } else if ( guess < secretNumber ){
    console.log('\tBUMMER! Too low sista frend...')
    return 'too low'
  } else {
    console.log('\tYOU WINN CHAMP!')
    return 'win'
  }
}

export { guessingGame, checkForWin }
