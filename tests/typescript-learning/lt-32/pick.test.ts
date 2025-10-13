import { makesIrishNumber, IrishNumber } from '@/typescript-learning/lt-32/pick'
import { TranslatedNumber } from '@/typescript-learning/lt-32/TranslatedNumber'
import { describe, expect, it } from 'vitest'

describe('Testing pick types', () => {
  it('can be aliased', () => {
    const six: IrishNumber = makesIrishNumber(6, 'sé')

    expect(six).toEqual({ value: 6, ie: 'sé' })
  })

  it('can be used as an inline type', () => {
    const seven: Pick<TranslatedNumber, 'value' | 'ie'> = makesIrishNumber(
      7,
      'seacht'
    )

    expect(seven).toEqual({ value: 7, ie: 'seacht' })
  })

  it('cannot have additional properties', () => {
    // Object literal may only specify known properties, and 'en' does not exist in type 'IrishNumber'
    //const eight: IrishNumber = { value: 8, ie: 'ocht', en: 'eight' }
  })
})
