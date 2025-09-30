import { Numeric } from '@/lt-22/constructors'
import { describe, it, expect } from 'vitest'

describe('tests of a constrcutors', () => {
  it('can be instantiated with a no-arg constructor', () => {
    const o: Numeric = new Numeric()

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toBeNull()
    expect(o.asNumeric).toBeNull()
  })

  it('can be instantiated with a one-arg (string) constructor', () => {
    const o: Numeric = new Numeric('forty-two')

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toBe('forty-two')
    expect(o.asNumeric).toBeNull()
  })

  it('can be instantiated with a one-arg (number) constructor', () => {
    const o: Numeric = new Numeric(42)

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toBeNull()
    expect(o.asNumeric).toBe(42)
  })

  it('can be instantiated with a two-arg constructor', () => {
    const o: Numeric = new Numeric('forty-two', 42)

    expect(o).toBeInstanceOf(Numeric)
    expect(o.asString).toBe('forty-two')
    expect(o.asNumeric).toBe(42)
  })
})
