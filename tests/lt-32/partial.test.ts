import { makesMaoriNumber, OptionalTranslatedNumber } from '@/lt-32/partial'
import { TranslatedNumber } from '@/lt-32/TranslatedNumber'
import { describe, expect, it } from 'vitest'

describe('Testing partial types', () => {
  it('can be a type', () => {
    const three: Partial<TranslatedNumber> = makesMaoriNumber(1, 'tahi')

    expect(three).toEqual({ value: 1, mi: 'tahi' })
  })

  it('can be a a named type', () => {
    const three: OptionalTranslatedNumber = makesMaoriNumber(2, 'rua')

    expect(three).toEqual({ value: 2, mi: 'rua' })
  })
})
