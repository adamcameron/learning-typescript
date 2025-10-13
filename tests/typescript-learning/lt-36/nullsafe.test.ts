/*
    eslint-disable
    @typescript-eslint/no-unsafe-member-access,
    @typescript-eslint/no-unsafe-call,
    @typescript-eslint/no-unsafe-assignment
*/
import {
  Holder,
  Doer,
  FunctionLibraryObject,
  VO,
} from '@/typescript-learning/lt-36/nullsafe'
import { describe, expect, it } from 'vitest'

describe('Tests of null-safe operators', () => {
  it('can play safe with properties', () => {
    const holder: Holder = new Holder()
    expect(holder?.doer).toBeNull()

    holder.doer = new Doer()
    expect(holder?.doer.do('the thing')).toEqual('[the thing] done')
  })

  it('can play safe with function-calls', () => {
    const myLib: FunctionLibraryObject = {}

    expect(myLib.f?.('some Value')).toBeUndefined()

    myLib.f = (s: string) => `was passed [${s}]`
    expect(myLib.f?.('some value')).toEqual('was passed [some value]')
  })

  it('can play safe with array access', () => {
    const vo: VO = {}

    vo.a = null
    expect(vo.a?.[2]).toBeUndefined()

    vo.a = ['tahi']

    expect(vo.a?.[2]).toBeUndefined()

    vo.a.push('rua')
    vo.a.push('toru')
    expect(vo.a?.[2]).toEqual('toru')
  })

  it('can use ?? to provide default on null', () => {
    const vo: VO = {}

    expect(vo.a).toBeUndefined()

    vo.a ??= 'has value'
    expect(vo.a).toEqual('has value')

    const willBeUndefined: string | null = vo?.b?.c
    expect(willBeUndefined).toBeUndefined()

    const willHaveDefault: string | null = vo?.b?.c ?? 'can be chained'
    expect(willHaveDefault).toEqual('can be chained')

    expect(() => {
      const doesNotShortCircuit: unknown = vo?.b.c
      void doesNotShortCircuit
    }).toThrow("Cannot read properties of undefined (reading 'c')")
  })

  it('has a value of undefined when not... erm... defined (runtime check)', () => {
    const vo: VO = {}

    expect(vo.a).toBeUndefined()

    let undefinedAssignment = vo.a?.b
    expect(typeof undefinedAssignment).toBe('undefined')

    const anotherVo: VO = {}
    vo.a = anotherVo
    undefinedAssignment = vo.a?.b
    expect(typeof undefinedAssignment).toBe('undefined')

    vo.a.b = 'some value'
    undefinedAssignment = vo.a?.b
    expect(typeof undefinedAssignment).not.toBe('undefined')
    expect(undefinedAssignment).toEqual('some value')
  })

  it("won't allow usage of unchecked null-possible value", () => {
    const holder: Holder | null = Holder.chanceYerArm(false)

    const nullSafeResult = holder?.doer // const nullSafeResult: Doer | null | undefined
    expect(nullSafeResult).toBeUndefined()

    //const unsafeResult = holder.doer // 'holder' is possibly 'null'
  })

  it.each([false, 0, '', NaN])(
    'shows || works similarly, but can be unreliable when first operand is falsy (%s)',
    (falsyValue) => {
      const vo: VO = {}

      expect(vo.a).toBeUndefined()

      vo.a ||= 'has value'
      expect(vo.a).toEqual('has value')

      vo.b = falsyValue
      expect(vo.b).toBeFalsy()

      vo.b ??= 'ignored override'
      expect(vo.b).toEqual(falsyValue)
      expect(vo.b).not.toEqual('ignored override')

      vo.b ||= 'bad override'
      expect(vo.b).not.toEqual(falsyValue)
      expect(vo.b).toEqual('bad override')
    }
  )
})
