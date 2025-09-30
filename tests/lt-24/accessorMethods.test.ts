import { Something, Account, NaturalNumber } from '@/lt-24/accessorMethods'
import { describe, it, expect } from 'vitest'

describe('tests of a accessor methods', () => {
  it('can have accessor methods on private properties', () => {
    const o: Something = new Something()
    o.accessibleProperty = 'accessiblePropertyValue'
    expect(o.accessibleProperty).toBe('eulaVytreporPelbissecca')
  })

  it('can have accessors on shorthand properties', () => {
    const o: Something = new Something('initialShortHandPropertyValue')
    o.shortHandProperty = 'updatedShortHandPropertyValue'
    expect(o.shortHandProperty).toBe('eulaVytreporPdnaHtrohSdetadpu')
  })

  it('can have read-only accessors', () => {
    const zachary: Account = new Account('Zachary', 'Lynch')

    expect(zachary.fullName).toBe('Zachary Lynch')
  })

  it('can have write-only accessors', async () => {
    const zachary: Account = new Account('Zachary', 'Lynch')

    zachary.password = '123letmein'

    expect(await zachary.placateCompiler()).not.toBeNull()
  })

  it('can have validation on the setter', () => {
    const n: NaturalNumber = new NaturalNumber(0)

    expect(() => {
      n.value = 0
    }).toThrowError(new RangeError('value [0] must be >= 1'))

    n.value = 1
    expect(n.value).toEqual(1)
  })
})
