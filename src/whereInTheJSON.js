
const findValueIn = ( obj, value, prevKey='' ) => {
  let retVal = undefined
  if(typeof(obj) == 'object'){
    for( let key in obj ) {
      if(obj[key] == value) {
        return prevKey+' -> '+key
      }
      if( retVal === undefined) {
        retVal = findValueIn( obj[key], value, prevKey+' -> '+key)
      }
    }
  }
  return retVal
}

const myObj = {
    "name": "William Shakespeare",
    "dead" : true,
    "works" : [
        {
            "name" : "Romeo and Juliet",
            "published" : 1591,
            "isAwesome" : true
        },
        {
            "name" : "Richard III",
            "published" : 1592,
            "isAwesome" : fals
        }
    ],
    "favoriteSites" : [
        "tumblr",
        "4chan"
    ]
}


console.log(findValueIn( myObj, "4chan" ))
console.log(findValueIn( myObj, "Romeo and Juliet" ))
