import scrabbleData from '../data/scrabbleData'
import readlineSync from 'readline-sync'

const updateUsedScrabTiles = (scrabbleSting) => {
  let myScrableData = scrabbleData
  scrabbleSting = scrabbleSting.toUpperCase()
  for( let letter of scrabbleSting ){
    scrabbleData[`${letter}`] -= 1
  }
  return scrabbleData
}

const sortAllLettersByCount = () => {
  let reverseHash = {}
  for( let letter in scrabbleData ){
    if(reverseHash[scrabbleData[`${letter}`]] == undefined) {
      reverseHash[scrabbleData[`${letter}`]] = `${letter}`
    }
    if(reverseHash[scrabbleData[`${letter}`]] !== letter) {
      reverseHash[scrabbleData[`${letter}`]] = reverseHash[scrabbleData[`${letter}`]]
      + `, ${letter}`
    }
  }
  return reverseHash
}

// ----- program start for a readlineSync ----
// console.log('Enter a set of Scrabble tiles')
// let enteredScrabSting = readlineSync.question('\t---->: ')
// updateUsedScrabTiles(enteredScrabSting)
//
// sortAllLettersByCount(enteredScrabSting)

export { updateUsedScrabTiles, sortAllLettersByCount }
