import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {arrayify} from '../src/stringIndices'

chai.use(chaiChange)

describe('stringIndices', () => {
  it('exists', () => {
    expect(arrayify).to.be.a('function')
  })

  describe('arrayify', () => {
    it('transforms a sentance into an array of strings')
  })
})
