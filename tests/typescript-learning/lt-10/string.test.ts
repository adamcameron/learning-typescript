import { describe, it, expect } from 'vitest'
import {
  returnsString,
  fromNumberUsingToString,
  fromNumberUsingStringConstructor,
  fromObjectUsingUnionTypeParameter,
  inverse,
} from '@/typescript-learning/lt-10/string'

describe('String tests', () => {
  it('demonstrates const, let, param and return types on a simple function', () => {
    const prefix: string = 'PREFIX'
    let testString: string = ''

    testString = prefix + '_SUFFIX'

    expect(returnsString(testString)).toBe(testString)
  })

  it('demonstrates casting a number to a string using toString()', () => {
    const testNumber: number = 42

    const result: string = fromNumberUsingToString(testNumber)

    expect(result).toEqual('42')
    expect(result).not.toEqual(42)
  })

  it('demonstrates casting a number to a string using the String constructor', () => {
    const testNumber: number = 42

    const result: string = fromNumberUsingStringConstructor(testNumber)

    expect(result).toEqual('42')
    expect(result).not.toEqual(42)
  })

  describe('Testing conversions', () => {
    const s: string = 's'
    const n: number = 42
    const b: boolean = true
    const bi: bigint = BigInt(42)
    const o: object = { key: 'property', toString: () => 'stringified' }
    const t: [string, number, boolean, bigint, object, null, undefined] = [
      s,
      n,
      b,
      bi,
      o,
      null,
      undefined,
    ]
    // eslint-disable-next-line -- doesn't like "any", but this is correct here
    const a: any[] = [s, n, b, bi, o, null, undefined]

    const f: (s: string, n: number) => void = (s: string, n: number) => s + n

    const sym: symbol = Symbol('key')

    it.each([
      ['string', s, 's'],
      ['number', n, '42'],
      ['boolean true', b, 'true'],
      ['boolean false', !b, 'false'],
      ['bigint', bi, '42'],
      ['object', o, 'stringified'],
      ['array', a, 's,42,true,42,stringified,,'],
      ['null', null, undefined],
      ['undefined', undefined, undefined],
      ['tuple', t, 's,42,true,42,stringified,,'],
      ['function', f, '(s2, n2) => s2 + n2'],
      ['symbol', sym, 'Symbol(key)'],
    ])(
      'demonstrates casting %s to a string using a union-type on the method signature',
      (type: string, actual, expected) => {
        const result = fromObjectUsingUnionTypeParameter(actual)

        expect(result).toEqual(expected)
      }
    )
  })

  it.each([
    ['42', '24'],
    [42, -42],
  ])(
    'inverses %s as %s',
    (testValue: string | number, expected: string | number) => {
      expect(inverse(testValue)).toBe(expected)
    }
  )
})
