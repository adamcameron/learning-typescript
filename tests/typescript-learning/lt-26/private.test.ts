import { SomePrivacy } from '@/typescript-learning/lt-26/private'
import { describe, it, expect } from 'vitest'

describe('tests of privacy', () => {
  const privateParts: SomePrivacy = new SomePrivacy()

  it('is a baseline test', () => {
    expect(privateParts.spill()).toEqual(['shhh!', 'SHHH!!!!'])
  })

  it('exposes TS private stuff at runtime via parenthetical notation', () => {
    expect(privateParts['viaTs']).toEqual('shhh!')
  })

  it('cannot do same with the JS private one', () => {
    expect(privateParts[('#via' + 'Js') as keyof SomePrivacy]).toBeUndefined()
  })
})
