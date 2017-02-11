import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import scrabbleData from '../data/scrabbleData'
import {updateUsedScrabTiles, sortAllLettersByCount} from '../src/scrabBag'

chai.use(chaiChange)
describe('Scrab Bag', () => {

  it('updateUsedScrabTiles method exists', () => {
    expect(updateUsedScrabTiles).to.be.a('function')
  })
  it('updateUsedScrabTiles method exists', () => {
    expect(sortAllLettersByCount).to.be.a('function')
  })

  describe('updateUsedScrabTiles', () => {

    it('decreses count of tiles used', () =>{
      let myScrabBag = updateUsedScrabTiles('EEEEEJKPTTT')
      expect(myScrabBag['E']).to.equal(7)
      expect(myScrabBag['J']).to.equal(0)
      expect(myScrabBag['K']).to.equal(0)
      expect(myScrabBag['N']).to.equal(6)
      expect(myScrabBag['T']).to.equal(3)
      expect(myScrabBag['P']).to.equal(1)
    })
  })

  describe('sortAllLettersByCount', () => {

    it('decreses count of tiles used', () =>{
      let sortedByCount = sortAllLettersByCount('myScrabBag')
      expect(sortedByCount[1]).to.deep.equal('P, Q, X, Z')
      expect(sortedByCount[4]).to.deep.equal('D, L, S, U')
    })
  })
})
