import readlineSync from 'readline-sync'

const fibonacci = ( number ) => {
  if( number === 0 ) {
    return 0
  } else if( number === 1 ) {
    return 1
  } else {
    return fibonacci( number-1 ) + fibonacci( number-2 )
  }
}

const fibToTen = ( binaryNum ) => {
  if( decimalNum < 0 ) {
    console.log("Please enter a positive interger!")
    return
  }

  let decimalValue = 0
  binaryNum = binaryNum.toString()
  for( let index in binaryNum ) {
    if(binaryNum[index] != 0) {
    decimalValue += fibonacci(parseInt(index)+1)
    }
  }
  return decimalValue
}


const getMaxFibIndex = ( decimalNum ) => {
  let indexCount = 0
  while( fibonacci(indexCount) <= decimalNum ){
    indexCount += 1
  }
  return indexCount-1
}

const tenToFib = ( decimalNum ) => {
  if( decimalNum < 0 ) {
    console.log("Please enter a positive interger!")
    return
  }
  
  let fibonacciString = ''
  let maxIndex = getMaxFibIndex( decimalNum )
  console.log('maxIndex:', maxIndex)
  for( let index = maxIndex; index > 0; index-- ) {
    if( decimalNum%fibonacci( index ) === decimalNum ){
      fibonacciString += '0'
    } else {
      fibonacciString += '1'
      decimalNum = decimalNum%fibonacci( index )
    }
  }
  console.log('fibonacciString:', fibonacciString)
}
 tenToFib(16)
 tenToFib(75025)
 tenToFib(-3)
