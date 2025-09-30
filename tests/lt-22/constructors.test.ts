import { Numeric } from '@/lt-22/constructors'
import { describe, it, expect } from 'vitest'

describe('tests of constructors', () => {
  it('can be instantiated with a no-arg constructor', () => {
    const o: Numeric = new Numeric()

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toBeNull()
    expect(o.asNumeric).toBeNull()
  })

  it('can be instantiated with a one-arg (string) constructor', () => {
    const o: Numeric = new Numeric('forty-two')

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toEqual('forty-two')
    expect(o.asNumeric).toBeNull()
  })

  it('can be instantiated with a one-arg (number) constructor', () => {
    const o: Numeric = new Numeric(42)

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toBeNull()
    expect(o.asNumeric).toEqual(42)
  })

  it('can be instantiated with a two-arg constructor', () => {
    const o: Numeric = new Numeric('forty-two', 42)

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toEqual('forty-two')
    expect(o.asNumeric).toEqual(42)
  })

  describe('Testing some bugs from the original implementation', () => {
    it('accepts an empty string as the only argument', () => {
      const o: Numeric = new Numeric('')

      expect(o.asString).toEqual('')
      expect(o.asNumeric).toBeNull()
    })

    it('accepts an empty string as the first argument', () => {
      const o: Numeric = new Numeric('', -1)

      expect(o.asString).toEqual('')
    })

    it('accepts zero as the only argument', () => {
      const o: Numeric = new Numeric(0)

      expect(o.asNumeric).toEqual(0)
      expect(o.asString).toBeNull()
    })

    it('accepts zero as the second argument', () => {
      const o: Numeric = new Numeric('NOT_TESTED', 0)

      expect(o.asNumeric).toEqual(0)
    })
  })
})
