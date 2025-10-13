import { PassPhrase } from '@/typescript-learning/lt-31/accessor'
import { describe, expect, it } from 'vitest'

describe('Testing accessor decoration', () => {
  it('obscures text when accessing obscuredText', () => {
    const phrase = new PassPhrase('letmein123')
    expect(phrase.obscuredText).toBe('**********')
  })

  it('original text remains unchanged', () => {
    const phrase = new PassPhrase('letmein123')
    expect(phrase.obscuredText).toBe('**********')
    expect(phrase.plainText).toBe('letmein123')
  })
})
