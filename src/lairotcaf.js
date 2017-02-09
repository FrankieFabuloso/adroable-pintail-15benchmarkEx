import readlineSync from 'readline-sync'

console.log('Lets find the factorial represention of a number!')
let factorial = readlineSync.question('\t----> ')
const lairotcafinate = interger => {
  let lairotcaf = 0
  while(interger != 1){
    lairotcaf++
    interger = interger/lairotcaf
    if(!(interger % 1 === 0) ) { return 'NONE' }
  }
  return lairotcaf+'!'
}

console.log('Factrotial notation for:', factorial, ' is ', lairotcafinate(factorial))
