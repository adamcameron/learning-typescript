import { describe, it, expect } from 'vitest'

describe('NaN investigation', () => {
  it('does not equal itself', () => {
    const nan1 = NaN
    const nan2 = NaN
    expect(nan1 == nan1).toBe(false) // eslint-disable-line eqeqeq
    expect(nan1 === nan1).toBe(false)
    expect(nan1 == nan2).toBe(false) // eslint-disable-line eqeqeq
    expect(nan1 === nan2).toBe(false)
    expect((NaN as any) === (NaN as any)).toBe(false) // eslint-disable-line @typescript-eslint/no-explicit-any
    expect((NaN as any) == (NaN as any)).toBe(false) // eslint-disable-line @typescript-eslint/no-explicit-any,eqeqeq
    expect(NaN).toBe(NaN)
  })
})
