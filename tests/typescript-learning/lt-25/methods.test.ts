import { Colour, ShoutyColour } from '@/typescript-learning/lt-25/methods'
import { describe, it, expect } from 'vitest'

describe('tests methods and inheritance', () => {
  it('tests parent method is called as one might expect', () => {
    const colour = new Colour('red', 'whero', 'dearg')
    expect(colour.getAllAsTuple()).toEqual(['red', 'whero', 'dearg'])

    const shoutyColour = new ShoutyColour('blue', 'kikorangi', 'gorm')
    expect(shoutyColour.getAllAsTuple()).toEqual(['BLUE', 'KIKORANGI', 'GORM'])
  })
})
