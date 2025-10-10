import {
  ValueObject,
  toValueObject,
  getValueForKey,
  returnsAsUnknown,
  SomeClass,
  SomeError,
  throwSomeError,
} from '@/lt-35/unknown'
import { describe, it, expect } from 'vitest'

describe('unknown tests', () => {
  const reverse = (s: string): string => s.split('').reverse().join('')

  const expected: ValueObject = {
    one: 'tahi',
    two: 'rua',
    three: 'toru',
    four: 'wha',
  }

  it('can use any for the v in a kv pair, when building a generic ValueObject', () => {
    const vo: ValueObject = toValueObject(
      ['one', 'tahi'],
      ['two', 'rua'],
      ['three', 'toru'],
      ['four', 'wha']
    )
    expect(vo).toEqual(expected)
  })

  it('can only be used once one defines its type', () => {
    const vo: ValueObject = toValueObject(
      ['one', 'tahi'],
      ['two', 'rua'],
      ['three', 'toru'],
      ['four', 'wha']
    )
    //const eno: string = reverse(vo.one) // 'vo.one' is of type 'unknown'
    const eno: string = reverse(vo.one as string)

    expect(eno).toEqual('ihat')
  })

  it('needs type specified before using value returned from :unknown function', () => {
    const vo: ValueObject = toValueObject(
      ['one', 'tahi'],
      ['two', 'rua'],
      ['three', 'toru'],
      ['four', 'wha']
    )
    const two = getValueForKey(vo, 'two')
    expect(two).toEqual('rua')

    //const owt: string = reverse(two) // Argument of type 'unknown' is not assignable to parameter of type 'string'
    const owt: string = reverse(two as string)
    expect(owt).toEqual('aur')
  })

  it('can use typeof to narrow the type', () => {
    const input = "it's a string"
    const theWhatNow = returnsAsUnknown(input)

    expect(typeof theWhatNow).toEqual('string')

    // const wonTahwEht = reverse(theWhatNow) // Argument of type 'unknown' is not assignable to parameter of type 'string'.
    if (typeof theWhatNow === 'string') {
      const wonTahwEht = reverse(theWhatNow)
      expect(wonTahwEht).toEqual("gnirts a s'ti")
    }
  })

  it('can use instanceof to narrow the type', () => {
    const input = new SomeClass()
    const theWhatNow = returnsAsUnknown(input)

    expect(theWhatNow).toBeInstanceOf(SomeClass)

    //expect(theWhatNow.someMethod("someValue")).toEqual('someValue') // 'theWhatNow' is of type 'unknown'.
    if (theWhatNow instanceof SomeClass) {
      expect(theWhatNow.someMethod('someValue')).toEqual('someValue')
    }
  })

  it('can use is [type] to narrow the type', () => {
    const input = new SomeClass()
    const theWhatNow = returnsAsUnknown(input)

    expect(theWhatNow).toBeInstanceOf(SomeClass)

    if (SomeClass.isValid(theWhatNow)) {
      expect(theWhatNow.someMethod('someValue')).toEqual('someValue')
    }
  })

  it('can be used when catching any old exception', () => {
    try {
      throwSomeError('This is an error')
    } catch (e: unknown) {
      expect(e).toBeInstanceOf(SomeError)
    }
  })
})
