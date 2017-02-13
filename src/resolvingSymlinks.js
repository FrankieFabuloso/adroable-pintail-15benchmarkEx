import fs from 'fs'

const a = fs.readFileSync('data/symlink','utf8')
const symlinks = a.split('\n')

const parseSymlinks = symlinks =>{
  const symlinkHash = {}
  for(let i = 1; i<=symlinks[0]; i++){
    let hashPair = symlinks[i].split(':')
    symlinkHash[hashPair[0]] = hashPair[1]
  }
  return normalizeHashValues(symlinkHash)
}

const resolveSymlinks = (symlinks, path) =>{
  const symlinkHash = parseSymlinks(symlinks)
  let resolvedPath = ''
  let parsedPath = path.split('/').filter( (item)=> item != '')
  for(let token of parsedPath){
    resolvedPath += '/'+token
    while(symlinkHash[resolvedPath] != undefined ){
      resolvedPath = symlinkHash[resolvedPath]
    }
  }
  console.log('resolvedPath:', resolvedPath)
  return resolvedPath
}


const normalizeHashValues = hash => {
  for(let key in hash){
    let value = hash[key]
    if (value[value.length-1] == '/') {
      hash[key] = value.slice(0, -1)
    }
  }
  return hash
}

resolveSymlinks(symlinks, symlinks[symlinks.length-2])
