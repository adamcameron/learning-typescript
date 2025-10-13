import { TranslatedNumber } from '@/typescript-learning/lt-23/parameterProperties'
import { describe, expect, it } from 'vitest'

describe('parameter properties tests', () => {
  it('should return all properties', () => {
    const translated = new TranslatedNumber(1, 'one', 'tahi')
    expect(translated.getAll()).toEqual({
      value: 1,
      en: 'one',
      mi: 'tahi',
    })
  })
})
