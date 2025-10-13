import {
  MaoriNumber,
  IrishNumber,
  returnsMaoriOrIrishNumber,
  BothNumberTypes,
} from '@/typescript-learning/lt-34/commonPropertyAccess'

import { describe, expect, it } from 'vitest'

describe('Tests common property access', () => {
  it('Demonstrates common property access constraints', () => {
    const value: MaoriNumber = new MaoriNumber('rua tekau ma wha', 24)
    expect(value.inMi()).toEqual('rua tekau ma wha')
    expect(value.name).toEqual('rua tekau ma wha')
    expect(value.value).toEqual(24)

    const broadenedValue: BothNumberTypes = returnsMaoriOrIrishNumber(value)
    //expect(broadenedValue.inMi()).toEqual('rua tekau ma wha') // Property 'inMi' does not exist on type 'BothNumberTypes'. Property 'inMi' does not exist on type 'IrishNumber'
    expect(broadenedValue.toString()).toEqual('rua tekau ma wha')
  })
  it('exercises IrishNumber', () => {
    // Type 'BothNumberTypes' is not assignable to type 'IrishNumber'. Property 'inIe' is missing in type 'MaoriNumber' but required in type 'IrishNumber'
    // const value: IrishNumber = returnsMaoriOrIrishNumber(
    //   new IrishNumber('seacht déag', 17)
    // )
    const value: BothNumberTypes = returnsMaoriOrIrishNumber(
      new IrishNumber('seacht déag', 17)
    )
    //expect(value.inIe()).toEqual('seacht déag') // Property 'inIe' does not exist on type 'BothNumberTypes'. Property 'inIe' does not exist on type 'MaoriNumber'
    if (value instanceof IrishNumber) {
      expect(value.inIe()).toEqual('seacht déag') // now it's OK cos we've checked that it IS an IrishNumber
      expect(value.name).toEqual('seacht déag')
      expect(value.value).toEqual(17)
      expect(value.toString()).toEqual('seacht déag')
    }
  })
})
