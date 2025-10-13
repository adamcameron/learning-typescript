import { MaoriNumbers } from '@/typescript-learning/lt-32/record'
import { describe, expect, it } from 'vitest'

describe('Testing record types', () => {
  it('can be a type', () => {
    const mi: MaoriNumbers = {
      one: { value: 1, name: 'tahi' },
      two: { value: 2, name: 'rua' },
      three: { value: 3, name: 'toru' },
      four: { value: 4, name: 'wha' },
    }

    expect(mi.three).toEqual({ value: 3, name: 'toru' })
  })

  it("can't have additional keys", () => {
    // Object literal may only specify known properties, and 'five' does not exist in type 'MaoriNumbers'.
    // const mi: MaoriNumbers = {
    //   one: { value: 1, name: 'tahi' },
    //   two: { value: 2, name: 'rua' },
    //   three: { value: 3, name: 'toru' },
    //   four: { value: 4, name: 'wha' },
    //   five: { value: 5, name: 'rima' },
    // }
  })
})
