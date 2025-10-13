import {
  resolvesNumber,
  NumericNumber,
  StringNumber,
} from '@/lt-34/controlFlowNarrowing'
import { describe, expect, it } from 'vitest'

describe('show control-flow narrowing', () => {
  it('exercises the test code', () => {
    let result: string = resolvesNumber(new NumericNumber(42))
    expect(result).toBe('42')

    result = resolvesNumber(new StringNumber('tahi'))
    expect(result).toBe('tahi')
  })
})
