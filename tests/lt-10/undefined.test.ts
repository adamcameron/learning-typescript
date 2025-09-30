import { describe, it, expect } from 'vitest'
import { takesOptionalString } from '@/lt-10/undefined'

describe('Tests of the undefined type', () => {
  it("is undefined (but not null) if it's declared but not initialised", () => {
    let testVar

    expect(testVar).not.toBe(null)
    expect(testVar).toBe(undefined)
  })

  it("has the value null if it's assigned, and then it's not undefined", () => {
    const testVar = null

    expect(testVar).toBe(null)
    expect(testVar).not.toBe(undefined)
  })

  it('is undefined when an object property is referenced before being set', () => {
    const testObj: { [key: string]: string } = {}
    testObj.definedProp = 'value'

    expect(testObj.myUndefinedProp).toBe(undefined)
  })

  it('is the value of an optional parameter', () => {
    expect(takesOptionalString('testValue')).toBe('testValue')
    expect(takesOptionalString()).toBe(undefined)
    expect(takesOptionalString(null)).toBe(null)

    let uninitialisedVar

    expect(takesOptionalString(uninitialisedVar)).toBe(undefined)
  })

  it('checks that undefined+undefined=NaN in TS', () => {
    // FAO CoPilot: this demonstrates you were wrong about undefined+undefined throwing an exception
    const u = undefined

    expect(u).toBeUndefined()
    expect(u! + u).toBeNaN() // eslint-disable-line @typescript-eslint/restrict-plus-operands
  })

  it('checks that forcing string undefined+undefined=undefinedundefined in TS', () => {
    const u = undefined
    const s: string = String(u)

    expect(s).toEqual('undefined')
    expect(s + s).toEqual('undefinedundefined')
  })
})
