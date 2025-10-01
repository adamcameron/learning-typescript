import {
  HasFullName,
  Name,
  LooseObject,
  HasFirstName,
  HasLastName,
  Numeric,
  Person,
  PersonWithOptionalDob,
  FormattablePerson,
  StringFormatter,
  Logger,
  getLogger,
} from '@/lt-18/interfaces'
import { describe, expect, it } from 'vitest'

describe('Tests of interfaces', () => {
  it('can fulfil an interface with an object', () => {
    const name: LooseObject = {
      firstName: 'Zachary',
      lastName: 'Lynch',
      getFullName() {
        return `${this.firstName} ${this.lastName}`
      },
    }

    const person: Name = new Name()

    person.setFromFullName(name as HasFullName)

    expect(person.firstName).toEqual('Zachary')
    expect(person.lastName).toEqual('Lynch')
  })

  it('can use intersection types', () => {
    const names: LooseObject = {
      firstName: 'Zachary',
      lastName: 'Lynch',
    }

    const person: Name = new Name()

    person.setFromNames(names as HasFirstName & HasLastName)

    expect(person.firstName).toEqual('Zachary')
    expect(person.lastName).toEqual('Lynch')
  })

  it('can have a generic type', () => {
    const stringNumber: Numeric<string> = { value: 'tahi' }
    expect(stringNumber.value).toEqual('tahi')

    const numericNumber: Numeric<number> = { value: 2 }
    expect(numericNumber.value).toEqual(2)

    //const badNumber: Numeric<number> = { value: '3' } // Type 'string' is not assignable to type 'number'.
  })

  it('merges same-named interfaces', () => {
    const dob: Date = new Date('2011-03-24')
    const z: Person = { name: 'Zachary', dob: dob }
    expect(z.name).toEqual('Zachary')
    expect(z.dob).toEqual(dob)

    // const j: Person = { name: 'Joe' } // Property 'dob' is missing in type '{ name: string; }' but required in type 'Person'.
  })

  it('can make properties read-only', () => {
    const dob: Date = new Date('2011-03-24')

    const zAsObject = { name: 'Zachary', dob: new Date('2011') }
    zAsObject.dob = dob // can write here

    const zAsPerson: Person = zAsObject
    //zAsPerson.dob = new Date('2011-03-24 09:02:00') // Cannot assign to 'dob' because it is a read-only property.

    expect(zAsPerson.dob).toEqual(dob)
  })

  it('can have optional properties', () => {
    const z: PersonWithOptionalDob = { name: 'Zachary' }
    expect(z.name).toEqual('Zachary')

    const j: PersonWithOptionalDob = {
      name: 'Joe',
      dob: new Date('2016-08-17'),
    }
    expect(j.dob).toEqual(new Date('2016-08-17'))
  })

  it('can use callable interfaces', () => {
    const shouter: StringFormatter = (s: string): string =>
      s.toUpperCase() + '!!!'

    const z: FormattablePerson = new FormattablePerson('Zachary')

    const formatted: string = z.format(shouter)

    expect(formatted).toEqual('ZACHARY!!!')
  })

  it('can implement hybrid types', () => {
    const testLogger: Logger = getLogger()

    const withDefaultLevel: string = testLogger('Log message')

    expect(withDefaultLevel).toEqual('[info] Log message')

    testLogger.setLevel('debug')
    const withDebugLevel: string = testLogger('Log message')

    expect(withDebugLevel).toEqual('[debug] Log message')
  })
})
