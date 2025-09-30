import { ShoutyTranslatedNumber, TranslatedNumber } from '@/lt-21/static'
import { describe, expect, it } from 'vitest'

describe('static tests', () => {
  it('can call a method on the class', () => {
    const translated = TranslatedNumber.fromTuple([2, 'two', 'rua'])
    expect(translated.getAll()).toEqual({
      value: 2,
      en: 'two',
      mi: 'rua',
    })
  })

  it('can access a property of a class', () => {
    expect(TranslatedNumber.supported).toEqual(['en', 'mi'])
  })

  it('inherits static methods', () => {
    const translated = ShoutyTranslatedNumber.fromTuple([3, 'three', 'toru'])

    expect(translated.getAll()).toEqual({
      value: 3,
      en: 'THREE',
      mi: 'TORU',
    })
  })
})
