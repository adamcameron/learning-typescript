import { MaoriColour, IrishWeekday } from '@/typescript-learning/lt-20/abstract'
import { describe, it, expect } from 'vitest'

describe('Tests of abstract class & method', () => {
  it("demonstrates an abstract method's implementation", () => {
    const orange: MaoriColour = new MaoriColour('orange', 'karaka')
    expect(orange.getTranslation()).toEqual(
      'The colour orange in Maori is karaka'
    )

    const rāpare: IrishWeekday = new IrishWeekday('Thursday', 'Déardaoin')
    expect(rāpare.getTranslation()).toEqual(
      'The day Thursday in Irish is Déardaoin'
    )
  })
})
