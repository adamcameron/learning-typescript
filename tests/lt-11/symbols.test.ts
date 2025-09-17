import * as SymbolsLib from '@/lt-11/symbols'
import { describe, it, expect } from 'vitest'

describe('Symbols tests', () => {
  it('returns a unique symbol from Symbol()', () => {
    const s1 = SymbolsLib.getNewSymbol()
    const s2 = SymbolsLib.getNewSymbol()

    expect(s1).not.toBe(s2)
  })

  it('returns the same symbol from Symbol.for()', () => {
    const s1 = SymbolsLib.getNewSymbolFor('key')
    const s2 = SymbolsLib.getNewSymbolFor('key')

    expect(s1).toBe(s2)
  })

  it('returns different symbols from Symbol.for() for different keys', () => {
    const s1 = SymbolsLib.getNewSymbolFor('key1')
    const s2 = SymbolsLib.getNewSymbolFor('key2')

    expect(s1).not.toBe(s2)
  })

  it('calls the Symbol constructor', () => {
    expect(() => {
      SymbolsLib.callsSymbolConstructor()
    }).toThrowError(TypeError)
  })

  it("can be used to define a class's name as a string", () => {
    const obj = SymbolsLib.returnsObjectWithToStringTagSymbol()

    expect(obj.toString()).toBe('StringRepresentationOfObject')
    expect(Object.prototype.toString.call(obj)).toBe(
      '[object StringNameOfClass]'
    )
  })

  it("can be used to define a class's primitive behaviour", () => {
    const obj = SymbolsLib.returnsObjectWithToPrimitiveSymbol()

    expect(+obj).toBe(42)
    expect(String(obj)).toBe('forty-two')

    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    expect(obj + '').toBe('default') // note that it is NOT using the string handler;
  })

  it('can be used to stick secret properties in objects', () => {
    const s1 = Symbol('s1 description')
    const s2 = Symbol('s2 description')

    const o = SymbolsLib.getObjectWithSecretProperties(s1, s2)

    expect(o[s1]()).toBe('first secret value (s1 description)')
    expect(o[s2]()).toBe('second secret value (s2 description)')

    expect(Object.keys(o)).toEqual(['publicProp'])
    expect(JSON.stringify(o)).toBe('{"publicProp":"public value"}')
    expect(Object.getOwnPropertySymbols(o)).toEqual([s1, s2])

    expect(Object.getOwnPropertyNames(o)).toEqual(['publicProp'])

    const props: Array<string> = []
    for (const prop in o) {
      props.push(prop)
    }
    expect(props).toEqual(['publicProp'])

    expect(Reflect.ownKeys(o)).toEqual(['publicProp', s1, s2])
  })

  it('can be used to specify an iterator for the object', () => {
    const obj = SymbolsLib.returnsObjectWithIteratorSymbol()

    expect([...obj]).toEqual('StringNameOfClass'.split(''))
  })
})
