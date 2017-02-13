import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {checkForWin} from '../src/numberGuess'

chai.use(chaiChange)

describe('Number Guess', () => {
  'use strict'
  it('exists', () => {
    expect(checkForWin).to.be.a('function')
  })

  describe('checkForWin', () => {
    it('returns too low', () => {
      expect(checkForWin(10, 50)).to.be.equal('too low')
    })

    it('returns too high', () => {
      expect(checkForWin(100, 50)).to.be.equal('too high')
    })

    it('returns win', () => {
      expect(checkForWin(23,23)).to.be.equal('win')
    })

  })
})
