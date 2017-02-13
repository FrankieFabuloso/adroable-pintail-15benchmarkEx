
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
  }
  console.log('arrayedSentance:', arrayedSentance)
  return arrayedSentance
}

export {arrayify}
