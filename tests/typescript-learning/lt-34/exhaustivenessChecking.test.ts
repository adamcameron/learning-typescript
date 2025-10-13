import {
  handlesRgbOnly,
  MaoriColour,
} from '@/typescript-learning/lt-34/exhaustivenessChecking'
import { describe, expect, it } from 'vitest'

describe('testing exhaustiveness checking of union types', () => {
  it('is a control test: takes RGB OK', () => {
    let result: string = handlesRgbOnly(MaoriColour.Whero)
    expect(result).toBe('red')

    result = handlesRgbOnly(MaoriColour.Kākāriki)
    expect(result).toBe('green')

    result = handlesRgbOnly(MaoriColour.Kikorangi)
    expect(result).toBe('blue')
  })

  it('subverts the intent of the function at runtime', () => {
    expect(() => {
      handlesRgbOnly('Karaka' as MaoriColour)
    }).toThrow('Unexpected value: "Karaka"')
  })
})
