import readlineSync from 'readline-sync'

const disemvowel = ( string ) => {
  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u', ' ']
  let disemvoweledString = ''
  for( let char of string ) {
    if( vowels.indexOf(char) < 0 ){
      disemvoweledString += char
    }
  }
  console.log('disemvoweledString:', disemvoweledString)
  return disemvoweledString
}

disemvowel('i am groot')
