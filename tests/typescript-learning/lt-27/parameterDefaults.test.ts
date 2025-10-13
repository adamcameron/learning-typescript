import {
  asColouredShapeTuple,
  Circle,
  Square,
  Triangle,
  Red,
  Green,
  Blue,
} from '@/typescript-learning/lt-27/parameterDefaults'

import { describe, expect, it } from 'vitest'

describe('testing parameter defaults with type parameters', () => {
  it('can take both args', () => {
    const result = asColouredShapeTuple(new Square(), new Green())

    expect(result[0]).toBeInstanceOf(Square)
    expect(result[1]).toBeInstanceOf(Green)
  })

  it('can take first arg only', () => {
    const result = asColouredShapeTuple(new Triangle())

    expect(result[0]).toBeInstanceOf(Triangle)
    expect(result[1]).toBeInstanceOf(Red)
  })

  it('can take second arg only', () => {
    const result = asColouredShapeTuple(new Blue())

    expect(result[0]).toBeInstanceOf(Circle)
    expect(result[1]).toBeInstanceOf(Blue)
  })
})
