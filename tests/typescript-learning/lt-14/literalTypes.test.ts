import {
  NzGreeting,
  GeneralGreeting,
  Person,
  translate,
  SomeProperties,
} from '@/typescript-learning/lt-14/literalTypes'
import { describe, it, expect } from 'vitest'

describe('Literal type tests', () => {
  it('is a thing', () => {
    const same: NzGreeting = "G'day"
    expect(typeof same).toBe('string')
  })

  it('can only be the exact same value', () => {
    //const same: NzGreeting = 'hello' // Type '"hello"' is not assignable to type '"G'day"'
  })

  it('will be defeated at runtime', () => {
    const same: NzGreeting = ['Not', "G'day"].join(' ') as NzGreeting // need the as NzGreeting to placate TS, but then the typecheck is circumvented
    expect(same).toBe("Not G'day")
  })

  it('can be a union of literals', () => {
    let g: GeneralGreeting = 'Hi'
    expect(g).toBe('Hi')

    g = 'Hello'
    expect(g).toBe('Hello')

    g = 'Howdy'
    expect(g).toBe('Howdy')

    g = "G'day"
    expect(g).toBe("G'day")

    //g = 'Greetings' // Type '"Greetings"' is not assignable to type 'GeneralGreeting'
  })

  it('can create a literal type using keyof', () => {
    type PersonKeys = keyof Person

    let k: PersonKeys = 'firstName'
    expect(k).toEqual('firstName')

    k = 'lastName'
    expect(k).toEqual('lastName')

    k = 'dob'
    expect(k).toEqual('dob')

    k = 'anything else' as PersonKeys // need to force it, otherwise Type '"anything else"' is not assignable to type 'keyof Person'
    expect(k).toEqual('anything else')
  })

  it('works on object literals via keyof', () => {
    const z = {
      firstName: 'Zachary',
      lastName: 'Cameron Lynch',
      dob: new Date(2011, 2, 24),
    }
    type t = keyof typeof z

    let k: t = 'firstName'
    expect(k).toEqual('firstName')

    k = 'lastName'
    expect(k).toEqual('lastName')

    k = 'dob'
    expect(k).toEqual('dob')

    //k = 'anything else' // Type '"anything else"' is not assignable to type '"firstName" | "lastName" | "dob"'

    void z // placate eslint
  })

  it('can be used slightly more practically', () => {
    let translation: string = translate('Hello world', 'EN')
    expect(translation).toBe('Hello world translated into EN')

    translation = translate('Hello world', 'MI')
    expect(translation).toBe('Hello world translated into MI')

    translation = translate('Hello world', 'IE')
    expect(translation).toBe('Hello world translated into IE')

    //translation = translate('Hello world', 'PL') // Argument of type '"PL"' is not assignable to parameter of type 'SupportedLanguages'
  })

  it("can be used to specify a type of 'property'", () => {
    const o: SomeProperties = new SomeProperties()

    expect(o.getAnyPropByName('ie')).toBe('trí')
  })

  it('can be subverted at runtime', () => {
    const o: SomeProperties = new SomeProperties()

    const runtimeKey: string = 'pl'
    expect(o.getAnyPropByName(runtimeKey as 'mi' | 'en' | 'ie')).toBeUndefined()
  })

  describe('numeric literal types with math operations', () => {
    it('can increment a value-constrainted-typed value as a number', () => {
      type oneToFour = 1 | 2 | 3 | 4
      const initialValue: oneToFour = 2
      const newNumberValue = initialValue + 1

      expect(newNumberValue).toEqual(3)
    })

    /* NB: does not compile
    it('can increment a value-constrainted-typed value as a type-literal value', () => {
      type oneToFour = 1 | 2 | 3 | 4
      const initialValue: oneToFour = 2
      const newTypedValue: oneToFour = initialValue + 1 // Type 'number' is not assignable to type 'oneToFour'

      expect(newTypedValue).toEqual(3)
    })
      */
  })
})
