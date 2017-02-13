import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {disemvowel} from '../src/disemvowel'

chai.use(chaiChange)

describe('disemvowel', () => {
  it('exists', () => {
    expect(disemvowel).to.be.a('function')
  })

  describe('disemvowel', () => {
    it('removes all vowels and spaces from a string', () => {
      expect(disemvowel('Fart in my hand.')).to.equal('Frtnmyhnd.')
    })
  })
})
