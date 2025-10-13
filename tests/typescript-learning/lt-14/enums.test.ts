import * as EnumsLib from '@/typescript-learning/lt-14/enums'
import { ConstLiteralNumberImplementation as CLNI } from '@/typescript-learning/lt-14/enums'
import { describe, it, expect } from 'vitest'

describe('Tests of enums', () => {
  it('has a numeric value starting at zero by default', () => {
    const one: EnumsLib.WholeNumber = EnumsLib.WholeNumber.One

    expect(one.valueOf()).toBe(1)
  })

  it('can set a starting value', () => {
    const two: EnumsLib.NaturalNumber = EnumsLib.NaturalNumber.Two

    expect(two.valueOf()).toBe(2)
  })

  it('can set each value', () => {
    const three: EnumsLib.PrimeNumber = EnumsLib.PrimeNumber.Three

    expect(three.valueOf()).toBe(3)
  })

  it('can have string values', () => {
    const four: EnumsLib.MaoriNumber = EnumsLib.MaoriNumber.Wha

    expect(four.valueOf()).toBe('four')
  })

  it('can have const expressions for value', () => {
    const five: CLNI = CLNI.Five

    expect(five.valueOf()).toBe(5)
  })

  it('has a toExponential method', () => {
    const exp: string = EnumsLib.NaturalNumber.Four.toExponential(2)

    expect(exp).toBe('4.00e+0')
  })

  it('has a toString method', () => {
    const str: string = EnumsLib.NaturalNumber.Three.toString()

    expect(str).toBe('3')
    expect(str).not.toBe(3)
  })

  it('has a toPrecision method', () => {
    const str: string = EnumsLib.NaturalNumber.Two.toPrecision(4)

    expect(str).toBe('2.000')
  })

  it('has a toFixed method', () => {
    const str: string = EnumsLib.NaturalNumber.One.toFixed(4)

    expect(str).toBe('1.0000')
  })

  it('can be a parameter type', () => {
    const two: string = EnumsLib.takesMaoriNumber(EnumsLib.MaoriNumber.Rua)

    expect(two).toBe('two')
  })

  it('can be a return type, and can look-up enum by string name', () => {
    const toru: EnumsLib.MaoriNumber = EnumsLib.returnsMaoriNumber('Toru')

    expect(toru).toBe(EnumsLib.MaoriNumber.Toru)
  })

  it('can resolve an enum from its string value', () => {
    const wha: EnumsLib.MaoriNumber = EnumsLib.getMaoriNumberFromValue('four')

    expect(wha).toEqual(EnumsLib.MaoriNumber.Wha)
  })

  it('is undefined when it cannot resolve an enum from its string value', () => {
    const invalid: EnumsLib.MaoriNumber =
      EnumsLib.getMaoriNumberFromValue('not an enum value')
    expect(invalid).toBeUndefined()
  })

  it('represents as an object in JSON', () => {
    const json: string = JSON.stringify(EnumsLib.MaoriNumber)

    expect(json).toBe('{"Tahi":"one","Rua":"two","Toru":"three","Wha":"four"}')
  })

  it('can have a type made from its keys', () => {
    type MaoriNumberKeys = keyof typeof EnumsLib.MaoriNumber

    let k: MaoriNumberKeys = 'Tahi'
    expect(k).toEqual('Tahi')

    k = 'Rua'
    expect(k).toEqual('Rua')

    //k = 'Rima' // Type '"Rima"' is not assignable to type '"Tahi" | "Rua" | "Toru" | "Wha"'
  })
})
