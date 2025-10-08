import {
  toTranslatedNumber,
  toReadonlyTranslatedNumber,
  ReadonlyTranslatedNumber,
} from '@/lt-32/readonly'
import { TranslatedNumber } from '@/lt-32/TranslatedNumber'
import { describe, expect, it } from 'vitest'

describe('Testing readonly types', () => {
  it('can be a type', () => {
    const tn: ReadonlyTranslatedNumber = toReadonlyTranslatedNumber(
      toTranslatedNumber(11, 'eleven', 'tekau ma tahi', 'aon déag')
    )

    expect(tn).toEqual({
      value: 11,
      en: 'eleven',
      mi: 'tekau ma tahi',
      ie: 'aon déag',
    })
  })

  it("can't be modified", () => {
    const number: TranslatedNumber = toTranslatedNumber(
      12,
      'XII',
      'tekau ma rua',
      'dó dhéag'
    )
    number.en = 'twelve'
    expect(number.en).toBe('twelve')

    const tn: Readonly<TranslatedNumber> = toReadonlyTranslatedNumber(number)

    // Cannot assign to 'value' because it is a read-only property.
    //tn.value = 13

    void tn
  })
})
