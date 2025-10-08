import { makesMaoriNumber, MaoriNumber } from '@/lt-32/omit'
import { TranslatedNumber } from '@/lt-32/TranslatedNumber'
import { describe, expect, it } from 'vitest'

describe('Testing omit types', () => {
  it('can be aliased', () => {
    const nine: MaoriNumber = makesMaoriNumber(9, 'iwa')
    expect(nine).toEqual({ value: 9, mi: 'iwa' })
  })

  it('can be used as an inline type', () => {
    const ten: Omit<TranslatedNumber, 'en' | 'ie'> = makesMaoriNumber(
      10,
      'tekau'
    )

    expect(ten).toEqual({ value: 10, mi: 'tekau' })
  })
})
