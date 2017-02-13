
const findStringAlong = string =>{
  const substringHash = []
  let keyPointer = 0
  let valuePointer = 0
  let key = ''
  let value = ''

  while(string[valuePointer] !== undefined ){
    // console.log('key is:', key)
    // console.log('value is:', value)
    if( string[keyPointer] !== string[valuePointer] ){
      value+=string[valuePointer]
      if( string[valuePointer] === string[valuePointer+1] ){
        valuePointer += 1
        //value+=string[valuePointer]
      } else {
        // console.log('hashing:', key, ':', value)
        substringHash[keyPointer] = key+value
        keyPointer++
        valuePointer = keyPointer
        key = ''
        value = ''
      }
    } else {
      key += string[keyPointer]
      valuePointer++
    }
  }
  return findLongestStringAlong(substringHash)
}

const findLongestStringAlong = ( hash ) => {
  let maxLength = 0
  let longestString = ''
  for( let index in hash ){
    if(hash[index].length > maxLength ){
      maxLength = hash[index].length
      longestString = hash[index]
    }
  }
  return longestString

}

export {findLongestStringAlong, findStringAlong}
