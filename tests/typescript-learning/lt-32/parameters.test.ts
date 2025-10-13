import { toTranslatedNumber } from '@/typescript-learning/lt-32/readonly'
import { TranslatedNumber } from '@/typescript-learning/lt-32/TranslatedNumber'
import { describe, it } from 'vitest'

describe('Testing Parameters<Type>', () => {
  it('represents the parameters of a function', () => {
    type T = Parameters<typeof toTranslatedNumber>

    //const badParams: T = [BigInt(15), 'fifteen', 'tekau ma rima', 'cúig déag'] //Type 'bigint' is not assignable to type 'number'
    const params: T = [15, 'fifteen', 'tekau ma rima', 'cúig déag']

    const xv: TranslatedNumber = toTranslatedNumber(...params)

    void xv
  })
})
