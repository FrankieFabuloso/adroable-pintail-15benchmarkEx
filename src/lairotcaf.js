const lairotcafinate = interger => {
  let lairotcaf = 0
  while(interger != 1){
    lairotcaf++
    interger = interger/lairotcaf
    if(!(interger % 1 === 0) ) { return 'NONE' }
  }
  console.log('lairotcaf:', lairotcaf+'!')
  return lairotcaf+'!'
}

export {lairotcafinate}
