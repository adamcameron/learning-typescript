import { ValueObject, toValueObject } from '@/lt-35/any'
import { describe, it, expect } from 'vitest'

describe('any tests', () => {
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
  it('is a readonly ValueObject', () => {
    const vo: ValueObject = toValueObject(
      ['one', 'tahi'],
      ['two', 'rua'],
      ['three', 'toru'],
      ['four', 'wha']
    )
    //vo.four = 'ceathair' // can't change: Index signature in type 'Readonly<WritableValueObject>' only permits reading.
    //vo.five = 'cinc' // can't add: Index signature in type 'Readonly<WritableValueObject>' only permits reading.
    //vo['six'] = 'sé' // can't dodge with [] notation: Index signature in type 'Readonly<WritableValueObject>' only permits reading.
    expect(vo).toEqual(expected)
  })
  it('can be used straight away', () => {
    const vo: ValueObject = toValueObject(
      ['one', 'tahi'],
      ['two', 'rua'],
      ['three', 'toru'],
      ['four', 'wha']
    )
    //const eerht: string = reverse(vo.three) // Unsafe argument of type `any` assigned to a parameter of type `string`
    const eerht: string = reverse(vo.three as string)

    expect(eerht).toEqual('urot')
  })
})
