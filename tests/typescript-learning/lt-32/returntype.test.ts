import { makesMaoriNumber } from '@/typescript-learning/lt-32/partial'
import { describe, it } from 'vitest'

describe('testing returntype types', () => {
  it('tests partial type', () => {
    type T = ReturnType<typeof makesMaoriNumber>
    const xiv: T = makesMaoriNumber(14, 'tekau ma whā') // would not compile if it wasn't correct

    void xiv
  })
})
