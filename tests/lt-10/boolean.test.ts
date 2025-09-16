import * as BooleanLib from '@/lt-10/boolean'
import { describe, it, expect } from 'vitest'

describe('boolean tests', () => {
  it.each([
    ['string', 'true', true, 'true'],
    ['string', 'false', true, 'false'],
    ['string', '', false, ''],
    ['string', '0', true, '0'],
    ['number', '0', false, 0],
    ['number', '-0', false, -0],
    ['number', '1', true, 1],
    ['bigint', '0', false, BigInt(0)],
    ['bigint', '1', true, BigInt(1)],
    ['boolean', 'true', true, true],
    ['boolean', 'false', false, false],
    ['boolean constructor', 'Boolean(true)', true, Boolean(true)],
    ['boolean constructor', 'Boolean(false)', false, Boolean(false)],
    ['boolean object', 'new Boolean(false)', true, new Boolean(false)],
    ['array', '[]', true, []],
    ['expression', 'null', false, null],
    ['expression', 'undefined', false, undefined],
    ['expression', 'NaN', false, NaN],
    ['object', '{}', true, {}],
    ['symbol', 'Symbol("key")', true, Symbol('key')],
  ])(
    '%s [%s] evaluates to %s',
    (
      type: string,
      valueAsString: string,
      expected: boolean,
      value: BooleanLib.boolable
    ) => {
      const result = BooleanLib.isBooleanValue(value, expected)
      expect(result).toBe(true)
    }
  )

  it('considers [] false but also truthy', () => {
    expect(eval('[] == false')).toBe(true) // eval() cos TS won't allow the expression as it's always true, but that is what the test is demonstrating
    expect([]).toBeTruthy()
  })
})
