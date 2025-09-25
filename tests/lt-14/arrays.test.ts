import * as ArraysLib from '@/lt-14/arrays'
import { describe, it, expect } from 'vitest'

describe('tests of arrays', () => {
  it('can have typed arrays', () => {
    const a: Array<string> = ['wha', 'toru', 'rua', 'tahi']

    const result = ArraysLib.takesAndReturnsStringArray(a)

    expect(result).toEqual(['tahi', 'rua', 'toru', 'wha'])

    // but it won't do that:
    //const invalid: Array<number> = ['tahi', 'rua', 'toru', 'wha'] // Type 'string' is not assignable to type 'number'.
  })

  it('can have readonly arrays', () => {
    const a1 = ['tahi', 'rua', 'toru']
    a1.push('wha')

    const a2 = ArraysLib.arrayToReadonly(a1)

    // a2.push('rima') // Property 'push' does not exist on type 'readonly []'

    void a2
  })

  it("doesn't work the other way around. One can't put a RO array into a mutable one", () => {
    let a1: readonly string[] = ['tahi', 'rua', 'toru', 'wha'] // eslint-disable-line prefer-const
    let a2: string[] = [] // eslint-disable-line prefer-const

    //a2 = a1 // The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'

    void a1
    void a2
  })
})
