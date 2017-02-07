import scrabbleData from '../data/scrabbleData'
import readlineSync from 'readline-sync'

const filterWords = (scrabbleSting) => {
  for( let letter of scrabbleSting ){
    scrabbleData[`${letter}`] -= 1
  }
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
  console.log('reverseHash:', reverseHash)
}

// ----- program start ----
console.log('Enter a set of Scrabble tiles')
let enteredScrabSting = readlineSync.question('\t---->: ')
enteredScrabSting = enteredScrabSting.toUpperCase()
filterWords(enteredScrabSting)

sortAllLettersByCount(enteredScrabSting)
