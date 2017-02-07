import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import numberGuess from '../src/numberGuess'

chai.use(chaiChange)


describe('Number Guess', () => {
  'use strict'

  it('exists', () => {
    expect(numberGuess).to.be.a('object')
  })
})
