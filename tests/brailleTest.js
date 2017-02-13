import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import {parseBrailleMsg} from '../src/braille'
import fs from 'fs'
const brailleMsg = fs.readFileSync('data/brailleMessage', 'utf8')

chai.use(chaiChange)

describe('braille', () => {
  it('exists', () => {
    expect(parseBrailleMsg).to.be.a('function')
  })

  describe('parseBrailleMsg', () => {
    it('decodes brailled messages to english', () => {
      expect(parseBrailleMsg(brailleMsg)).to.equal('helloworld')
    })
  })
})
