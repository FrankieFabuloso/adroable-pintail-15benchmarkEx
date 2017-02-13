import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {findLongestStringAlong, findStringAlong} from '../src/stringMeAlong'

chai.use(chaiChange)

describe('stringMeAlong', () => {
  it('findLongestStringAlong exists', () => {
    expect(findLongestStringAlong).to.be.a('function')
  })

  it('findStringAlong exists', () => {
    expect(findStringAlong).to.be.a('function')
  })

  describe('findStringAlong', () => {
    it('returns the longest substring of two consecutive chars in a string', () => {
      expect(findStringAlong('ghhiiii')).to.equal('hhiiii')
    })
  })
})
