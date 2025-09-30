import {
  DefiniteAssignmentAssertionExample as DAAE,
  NonNullAssertionExample as NNAE,
} from '@/lt-30/bangUsage'
import { describe, it, expect } from 'vitest'

describe('Testing ! operator for assignment verification', () => {
  describe('Testing definite assignment assertion', () => {
    it('says that an assignment has indeed taken place', () => {
      const sut: DAAE = new DAAE()

      sut.setStringValue('NOT_NULL')

      expect(sut.double()).toEqual('NOT_NULLNOT_NULL')
    })

    it('will break at runtime if an assignment has not indeed taken place', () => {
      const sut: DAAE = new DAAE()

      expect(sut.double()).toBeNaN()
    })
  })
  describe('Testing non-null assertion operator', () => {
    it('says that the variable definitely is not null', () => {
      const sut: NNAE = new NNAE()

      sut.setStringValue('NOT_NULL')

      expect(sut.double()).toEqual('NOT_NULLNOT_NULL')
    })

    it('will break at runtime if an assignment has not indeed taken place', () => {
      const sut: NNAE = new NNAE()

      expect(sut.double()).toEqual(0) // FML: null + null = 0
    })

    it('says that the array element was definitely found', () => {
      const sut: NNAE = new NNAE()

      sut.setArrayValue(['tahi', 'rua', 'toru', 'wha'])

      expect(sut.findInArray('toru')).toEqual('toru')
    })

    it('will be subverted at runtime if the array element was not found', () => {
      const sut: NNAE = new NNAE()

      sut.setArrayValue(['tahi', 'rua', 'toru'])

      expect(sut.findInArray('wha')).toBeUndefined()
    })
  })
})
