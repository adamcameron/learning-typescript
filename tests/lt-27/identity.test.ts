import { identity, C1, C2, I } from '@/lt-27/identity'
import { describe, expect, it } from 'vitest'

describe('identity tests', () => {
  it('should return the same number', () => {
    expect(identity(42)).toBe(42)
    expect(identity<number>(42)).toBe(42)
  })

  it('should return the same string', () => {
    expect(identity<string>('hello')).toBe('hello')
  })

  it('should return the same object', () => {
    const obj = { a: 1 }
    expect(identity<object>(obj)).toBe(obj)
  })

  it('should return the same object (C1, C2)', () => {
    const o1 = new C1()
    expect(identity(o1)).toBe(o1)
    expect(identity<C1>(o1)).toBe(o1)
    expect(identity<I>(o1)).toBe(o1)

    const o2 = new C2()
    expect(identity(o2)).toBe(o2)
    expect(identity<I>(o2)).toBe(o2)
  })
})
