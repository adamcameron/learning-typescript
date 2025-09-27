import { Base, Sub } from '@/lt-13/inheritance'
import { describe, it, expect } from 'vitest'

describe('tests of a inheritance', () => {
  it('can be instantiated', () => {
    const o: Sub = new Sub()

    expect(o).toBeInstanceOf(Sub)
    expect(o).toBeInstanceOf(Base)
  })

  it('can have a constructor and properties', () => {
    const o: Sub = new Sub('baseProperty', 'subProperty')

    expect(o.baseProperty).toBe('baseProperty')
    expect(o.subProperty).toBe('subProperty')
  })

  it("can't access base class private properties directly", () => {
    const o: Sub = new Sub('baseProperty', 'subProperty')

    //expect(o.reversedProperty).toBe('ytreporPesab') // This line will cause a TypeScript error
    expect(o.returnReversedProperty()).toBe('ytreporPesab')
  })

  it('can have accessor methods on private properties', () => {
    const o: Sub = new Sub('baseProperty', 'subProperty')
    o.accessibleProperty = 'accessibleProperty'
    expect(o.accessibleProperty).toBe('ytreporPelbissecca')
  })

  it('can have shorthand properties', () => {
    const o: Sub = new Sub('baseProperty', 'subProperty')
    o.shortHandProperty = 'shortHandProperty'
    expect(o.shortHandProperty).toBe('ytreporPdnaHtrohs')
  })
})
