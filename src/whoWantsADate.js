import readline from 'readline'
import fs from 'fs'
const monthsInWords = {
  'Jan': '01',
  'Feb': '02',
  'Mar': '03',
  'Apr': '04',
  'May': '05',
  'Jun': '06',
  'Jul': '07',
  'Aug': '08',
  'Sep': '09',
  'Oct': '10',
  'Nov': '11',
  'Dec': '12',
}

const rd = readline.createInterface({
  input: fs.createReadStream('data/date'),
  output: fs.createWriteStream('data/fixedDate',
  {
    flags: 'w',
    defaultEncoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  })
})
const parseDate = (date) => {
  let isoDate = ''
  if(date.indexOf('-') > 0){
    isoDate = date

  } else if(date.indexOf('/') > 0) {
    let splitDate = date.split('/')
    if(splitDate[2] > 49){
      isoDate += '19'+splitDate[2]
    } else {
      isoDate += '19'+splitDate[2]
    }
    isoDate += '-'+splitDate[0]+'-'+splitDate[1]

  } else if(date.indexOf('#') > 0) {
    let splitDate = date.split('#')
    if(splitDate[1] > 49){
      isoDate += '19'+splitDate[1]
    } else {
      isoDate += '19'+splitDate[1]
    }
    isoDate += '-'+splitDate[0]+'-'+splitDate[2]

  } else if(date.indexOf('*') > 0) {
    let splitDate = date.split('*')
    isoDate += splitDate[2]+'-'+splitDate[1]+'-'+splitDate[0]
  } else if(date.indexOf(' ') > 0) {
    let splitDate = date.split(' ')
    if(splitDate[2].length > 3) {
      isoDate += splitDate[2]
    } else {
      if(splitDate[2] > 49){
        isoDate += '19'+splitDate[2]
      } else {
        isoDate += '19'+splitDate[2]
      }
    }
    splitDate[1] = splitDate[1].substring(0, 2)
    isoDate += '-' + monthsInWords[splitDate[0]] + '-' + splitDate[1]
  }
  return isoDate
}

rd.on('line', (line) => {
  console.log(parseDate(line))
})
