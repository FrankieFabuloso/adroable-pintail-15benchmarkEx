import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {lairotcafinate} from '../src/lairotcaf'

chai.use(chaiChange)

describe('lairotcafinate', () => {
  it('exists', () => {
    expect(lairotcafinate).to.be.a('function')
  })

  describe('lairotcafinate', () => {
    it('returns factorial notation for a number if is factorial', () => {
      expect(lairotcafinate(5040)).to.equal('7!')
    })
    it('retruns NONE if not factorial', () => {
      expect(lairotcafinate(666)).to.equal('NONE')
    })
  })
})
