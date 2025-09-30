import {
  TranslatedNumber,
  ReadonlyTranslatedNumber,
} from '../../src/lt-13/readonly'
import { describe, it, expect } from 'vitest'

describe('tests readonly properties', () => {
  it('is a baseline test', () => {
    const four: TranslatedNumber = new TranslatedNumber(4, 'wha')
    expect(four.translation).toEqual('wha')

    four.translation = 'whā'
    expect(four.translation).toEqual('whā')
  })

  it('shows that one cannot chane a readonly property', () => {
    const five: ReadonlyTranslatedNumber = new TranslatedNumber(5, 'rima')

    // five.translation = 'ono' // compilation error

    expect(five.translation).toEqual('rima')
  })
})
