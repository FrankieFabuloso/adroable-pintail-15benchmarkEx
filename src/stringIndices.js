import readlineSync from 'readline-sync'

const arrayify = ( sentance ) => {
  let arrayedSentance = []
  let index = 1

  for( let letter of sentance ) {
    if( letter === ' ') {
      index += 1
      continue
    }
    if( arrayedSentance[index] === undefined ){
      arrayedSentance[index] = letter
    } else {
      arrayedSentance[index] += letter
    }
    console.log('letter:', letter)
  }
  console.log('arrayedSentance:', arrayedSentance)
  return arrayedSentance
}

const myArrayedSentance = arrayify( "FARTS ARE SMELL" )

console.log('myArrayedSentance[1]:', myArrayedSentance[1])
