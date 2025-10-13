import {
  throwAnError,
  throwsAnErrorIfItIsBad,
  returnsStringsOrNumbers,
} from '@/typescript-learning/lt-35/never'
import { describe, it, expect } from 'vitest'

describe('never tests', () => {
  it("indicates the function doesn't return", () => {
    expect(() => {
      throwAnError('an error')
      // hints "Unreachable code detected."
      const x: string = ''
      void x
    }).toThrow('an error')
  })

  it('is only conditionally never', () => {
    expect(() => {
      throwsAnErrorIfItIsBad("it's bad")
      // no hints this time
      const x: string = ''
      void x
    }).toThrow("it's bad")

    const result: boolean = throwsAnErrorIfItIsBad("it's ok")
    expect(result).toBe(false)
  })

  it('will hint never on a variable set in perceived-unreachable code', () => {
    let result = returnsStringsOrNumbers('a string')
    expect(result).toEqual('a string')

    result = returnsStringsOrNumbers(42)
    expect(result).toEqual(42)

    result = returnsStringsOrNumbers(['an', 'array'] as unknown as string)
    expect(result).toEqual(['an', 'array'])
  })
})
