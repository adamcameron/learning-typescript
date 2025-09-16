import * as NumberLib from '@/lt-10/number'
import { describe, it, expect } from 'vitest'

describe('Testing numeric behaviour', () => {
  it('multiplies two integers', () => {
    expect(NumberLib.multiply(3, 14)).toBe(42)
  })

  it('multiplies a float', () => {
    const product: number = NumberLib.multiply(100, 17.76)
    const productAsString: string = product.toString()

    expect(product).not.toBe(1776)
    expect(product).toBe(1776.0000000000002)
    expect(productAsString).toBe('1776.0000000000002')
    expect(Number.parseInt(productAsString, 10)).toBe(1776)
  })

  it('has infinities', () => {
    expect(typeof Infinity).toBe('number')
    expect(Math.abs(-Infinity)).toBe(Infinity)
    expect(Infinity - 1).toBe(Infinity)
    expect(Infinity + 1).toBe(Infinity)
  })
})
