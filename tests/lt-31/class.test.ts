import { Number } from '@/lt-31/class'
import { describe, expect, it } from 'vitest'

describe('Testing class decoration', () => {
  it('intercepts the constructor', () => {
    expect(new Number().value).toEqual('tahi')
    expect(new Number().value).toEqual('rua')
    expect(new Number().value).toEqual('toru')
    expect(new Number().value).toEqual('wha')
    expect(() => new Number()).toThrowError('No more Maori numbers')
  })
})
