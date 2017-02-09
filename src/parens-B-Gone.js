import readlineSync from 'readline-sync'
let matchingParens = /\(([^)(]+)\)/
let lettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const hashMatchingParens = (string) => {
  const myHash = {}
  let foundMatch = string.match(matchingParens)
  let counter = 0
  while( foundMatch !== null ){
    // console.log('----->parsing string:', string)
    let hashKeyForChunk = lettersArray[counter]+' '
    let removed = foundMatch[0]
    myHash[lettersArray[counter]] = removed
    string = string.replace(removed, hashKeyForChunk)
    foundMatch = string.match(matchingParens)
    // console.log('new string:', string)
    counter++
  }
  return removeDupParens(myHash)
}

const removeDupParens = hash => {
  let count = 0
  for (let [key, value] of Object.entries(hash)){
    console.log(key, value)
    if (!(/\d/.test(value)) && value.split(' ').length <= 2) {
      hash[key] = value.match(/[^()]+/)[0]
    }
    count++
  }
  console.log('hash:', hash)
  return assembleExpression(hash, count-1)
}

const assembleExpression = (hash, count) => {
  let parseRoot = hash[lettersArray[count]]
  console.log('parseRoot:', parseRoot)
  console.log((/[a-zA-Z]/.test(parseRoot)))
  while( /[a-zA-Z]/.test(parseRoot) ){
    for(let char of parseRoot){
      if (hash[char]) {
        parseRoot = parseRoot.replace(char, hash[char])
        console.log('parseRoot:', parseRoot)
      }
    }
  }
  console.log('parseRoot:', parseRoot)
}

hashMatchingParens('(((1234)(((5)67))))')
hashMatchingParens('12((3))')
hashMatchingParens('((1((23)(45)))6)')
