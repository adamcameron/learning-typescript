import {
  hasLengthViaGeneric,
  hasLengthViaInterface,
  hasLengthViaGenericExplicitKey,
  hasLengthViaGenericProvidedKey,
  Forty2,
  Twenty4,
} from '@/lt-27/typeVariables'
import { describe, expect, it } from 'vitest'

describe('testing type parameters', () => {
  it('can be type-constrained via generics (implements interface)', () => {
    const o = new Forty2()
    expect(hasLengthViaGeneric(o)).toBe(o)
  })

  it('can be type-constrained directly via interface', () => {
    const o = new Forty2()
    expect(hasLengthViaInterface(o)).toBe(o)
  })

  it("can be type-constrained via generics (doesn't implement interface)", () => {
    const o = new Twenty4()
    expect(hasLengthViaGeneric(o)).toBe(o)
  })

  it('can be type-constrained via generics specifying required key', () => {
    const o = new Twenty4()
    expect(hasLengthViaGenericExplicitKey(o)).toBe(o)
  })

  it('can be type-constrained via interface (without implementing it)', () => {
    const o = new Twenty4()
    expect(hasLengthViaInterface(o)).toBe(o)
  })

  it('can be type-constrained via generics (with well-shaped object)', () => {
    const o = { length: 17 }
    expect(hasLengthViaGeneric(o)).toBe(o)
  })

  it('can be type-constrained via interface (with a well-shaped object)', () => {
    const o = { length: 17 }
    expect(hasLengthViaInterface(o)).toBe(o)
  })

  it('can be type-constrained via generics specifying required key (with a well-shaped object)', () => {
    const o = { length: 17 }
    expect(hasLengthViaGenericExplicitKey(o)).toBe(o)
  })

  it('can be type-constrained via generics specifying required key as param (with a well-shaped object)', () => {
    const o1 = { length: 17 }
    expect(hasLengthViaGenericProvidedKey(o1, 'length')).toBe(o1)

    const o2 = { len: 12 }
    expect(hasLengthViaGenericProvidedKey(o2, 'len')).toBe(o2)

    const o3 = { len: 12 }
    // Argument of type '"length"' is not assignable to parameter of type '"len"'.
    //expect(hasLengthViaGenericProvidedKey(o3, 'length')).toBe(o3)
    void o3
  })
})
