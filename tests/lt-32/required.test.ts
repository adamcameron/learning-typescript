import {
  makesNumber,
  OptionallyTranslatedNumber,
  RequiredTranslatedNumber,
} from '@/lt-32/required'
import { describe, expect, it } from 'vitest'

describe('Testing required types', () => {
  it('is a baseline, using OptionallyTranslatedNumber', () => {
    const four: OptionallyTranslatedNumber = { value: 4 }

    expect(four).toEqual({ value: 4 })
    expect(four.en).toBeUndefined()
  })

  it('will force a compile time check', () => {
    // Argument of type '{ value: number; en: string; ie: string; }'
    // is not assignable to parameter of type 'Required<OptionallyTranslatedNumber>'.
    //Property 'mi' is missing in type '{ value: number; en: string; ie: string; }'
    // but required in type 'Required<OptionallyTranslatedNumber>'
    //const partialFive: RequiredTranslatedNumber = makesNumber({value: 5, en: 'five', ie: 'bē'})

    const five: RequiredTranslatedNumber = makesNumber({
      value: 5,
      en: 'five',
      mi: 'rima',
      ie: 'bē',
    })

    expect(five).toEqual({ value: 5, en: 'five', mi: 'rima', ie: 'bē' })
  })
})
