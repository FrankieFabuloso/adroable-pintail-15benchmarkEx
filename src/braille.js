import fs from 'fs'

const brailleAplhabet = JSON.parse(fs.readFileSync('data/braille.json','utf8'))
const brailleMsg = fs.readFileSync('data/brailleMessage', 'utf8')

const parseBrailleMsg = braille => {
  braille = braille.split('\n').filter((line)=> line != '')
  const brailleArr = []
  for(let line of braille){2
    line = line.split(' ')
    for(let part in line){
      if(brailleArr[part] == undefined){
        brailleArr[part] = line[part]
      } else {
        brailleArr[part] += line[part]
      }
    }
  }
  return decodeBrailleParse(brailleArr)
}

const decodeBrailleParse = brailleArray => {
  let message = ''
  for(let codedLetter of brailleArray){
    if(brailleAplhabet[codedLetter] != undefined){
      message += brailleAplhabet[codedLetter]
    }
  }
  return message
}
console.log('message:', parseBrailleMsg(brailleMsg))


export {parseBrailleMsg}
