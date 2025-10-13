import * as TuplesLib from '@/typescript-learning/lt-14/tuples'
import { describe, it, expect } from 'vitest'

describe('tuple tests', () => {
  it("demonstrates tuples aren't the same as each other", () => {
    const t1: [string, string] = ['key', 'value']
    const t2: [string, string] = ['key', 'value']

    expect(t1).not.toBe(t2)
    expect(t1).toEqual(t2)

    const t3: [string, string] = t1
    expect(t1).toBe(t3)
  })

  it('returnsStringNumberTupleFromArgs returns a string/number tuple', () => {
    const t = TuplesLib.returnsStringNumberTupleFromArgs('answer', 42)
    expect(t).toEqual(['answer', 42])
  })

  it("returnsStringNumberTupleFromArgs doesn't error when the value isn't a number, due to no ability to runtime typecheck", () => {
    const t = TuplesLib.returnsStringNumberTupleFromArgs('answer', 'forty-two')
    expect(t).toEqual(['answer', 'forty-two'])
  })

  it('can be destructured', () => {
    const [key, value] = TuplesLib.returnsStringNumberTupleFromArgs(
      'answer',
      42
    )

    expect(key).toBe('answer')
    expect(value).toBe(42)

    // demonstrate that `key` is a discrete const here
    expect(() => {
      eval("key = 'updated'")
    }).toThrowError(TypeError('Assignment to constant variable.'))
  })

  it('shows a tuple can be changed', () => {
    const t1 = ['key', 'value']

    t1[0] = 'updated key'

    expect(t1).toEqual(['updated key', 'value'])
  })

  it("shows a readonly tuple can't be changed", () => {
    const t = TuplesLib.returnsReadonlyTuple('key', 'value')

    // t[0] = 'updated key'// tsc won't allow this.

    eval("t[0] = 'updated key'")

    expect(t).toEqual(['updated key', 'value']) // fine at runtime though
  })

  it("it's not limited to two elements (which for some reason I expected it to)", () => {
    const one = TuplesLib.returnsThreeElementTuple(1, 'one', 'tahi')

    expect(one).toEqual([1, 'one', 'tahi'])
  })

  it('can use rest operator', () => {
    const t = TuplesLib.returnAllArgs(2, 'two', 'rua', 'dhá')

    expect(t).toEqual([2, 'two', 'rua', 'dhá'])
  })

  it('can be treated as an array', () => {
    const t = TuplesLib.returnsStringNumberTupleFromArgs('answer', 42)

    t.push('forty-two')

    const a = [...t]
    //const a = Array(...t) // this works, but TS complains "Argument of type 'number' is not assignable to parameter of type 'string'"
    expect(a[2]).toBe('forty-two') // TS won't let me reference t[2] as t is supposed to be [string, number]

    expect(t.pop()).toBe('forty-two')
  })

  it('supports optional elements', () => {
    const t1 = TuplesLib.returnsWithOptionalThirdElement(3, 'three')
    expect(t1).toEqual([3, 'three'])

    const t2 = TuplesLib.returnsWithOptionalThirdElement(4, 'four', 'wha')
    expect(t2).toEqual([4, 'four', 'wha'])
  })

  it('supports giving tuple elements labels', () => {
    const t = TuplesLib.returnsTupleWithNamedElements(5, 'five', 'rima')

    expect(t).toEqual([5, 'five', 'rima'])
  })

  it('can be used as a type, and can be expanded to be used as individual args', () => {
    const args: TuplesLib.TranslationsTuple = [5, 'five', 'rima']
    const t = TuplesLib.returnsTupleWithNamedElements(...args)

    expect(t).toEqual([5, 'five', 'rima'])
  })

  it('supports union types', () => {
    const stringArgs: TuplesLib.DoubleString = ['ono', 'whitu']
    const t1 = TuplesLib.takesTwoStringsOrNumbers(stringArgs)
    expect(t1).toEqual(['ono', 'whitu'])

    const numberArgs: TuplesLib.DoubleNumber = [8, 9]
    const t2 = TuplesLib.takesTwoStringsOrNumbers(numberArgs)
    expect(t2).toEqual([8, 9])

    // won't work if it's neither DoubleString nor DoubleNumber
    const t3 = TuplesLib.takesTwoStringsOrNumbers(eval("['forty-two', 42]")) // eslint-disable-line @typescript-eslint/no-unsafe-argument

    expect(t3).toEqual(['forty-two', 42]) // still works if one bypasses the compiler
  })
})
