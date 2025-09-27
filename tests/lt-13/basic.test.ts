import { Basic } from '@/lt-13/basic'
import { describe, it, expect } from 'vitest'

describe('tests of a Basic class', () => {
  it('can be instantiated', () => {
    const o: Basic = new Basic()

    expect(o).toBeInstanceOf(Basic)
  })
})
