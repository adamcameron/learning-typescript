import { MaoriNumber } from '@/typescript-learning/lt-15/namespaces'
import { describe, it, expect } from 'vitest'

describe('Testing namespaces', () => {
  describe('Emulating enum with method', () => {
    it('has accessible enums', () => {
      expect(MaoriNumber.Tahi).toBe('one')
    })
    it('has accessible methods', () => {
      expect(MaoriNumber.fromValue('two')).toEqual(MaoriNumber.Rua)
    })
    it("won't fetch the method as an 'enum' entry", () => {
      expect(() => {
        MaoriNumber.fromValue('fromValue')
      }).toThrowError('Value "fromValue" is not a valid MaoriNumber')
    })
    it("will error if the string doesn't match a MaoriNumber", () => {
      expect(() => {
        MaoriNumber.fromValue('rima')
      }).toThrowError('Value "rima" is not a valid MaoriNumber')
    })
  })
})
