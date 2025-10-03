import { create, C, createSomeObject, SomeClass } from '@/lt-27/class'
import { describe, expect, it } from 'vitest'

describe('testing create-from-class functions', () => {
  it('can create an instance of a class passed as parameter', () => {
    const c = create(C)
    expect(c).toBeInstanceOf(C)
  })

  it('can create an instance of a class implementing an interface passed as parameter', () => {
    const someObject = createSomeObject(SomeClass)

    expect(someObject).toBeInstanceOf(SomeClass)
  })
})
