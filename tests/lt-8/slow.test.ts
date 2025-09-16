import { describe, it, expect } from 'vitest'
import { mySlowFunction } from '../../src/lt-8/slow'

describe('test vitest watch behaviour', () => {
  it('should be slow, but only be run when this file or slow.ts is changed', async () => {
    const result = await mySlowFunction()
    expect(result).toBeUndefined()
  })
})
