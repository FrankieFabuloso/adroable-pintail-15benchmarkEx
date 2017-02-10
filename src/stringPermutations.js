let stack = []
let permutations = []
const findPermutations = (string) => {
  stack = [string]
  while(stack.length > 0){
    let wordToPermute = stack.pop()
    if(permutations.indexOf(wordToPermute) < 0){
      permutations.push(wordToPermute)
    }
    permute(wordToPermute, stack)
  }
}

const permute = (string) => {
  for( let outerIdx in string ){
    let word = string[outerIdx]
    for(let innerIdx in string){
      if(outerIdx !== innerIdx){
        word+=string[innerIdx]
      }
    }
    if(permutations.indexOf(word) < 0){
      stack.push(word)
    }
  }
}

findPermutations('lemonade')

console.log('permutations:', permutations)
console.log('permutations:', permutations.length)
