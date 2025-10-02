import { Person } from '@/lt-24/autoAccessors'
import { describe, expect, it } from 'vitest'

describe('Testing auto accessors', () => {
  it('should create a person with first and last name', () => {
    const person = new Person('Zachary', 'Lynch')
    expect(person.firstName).toEqual('Zachary')
    expect(person.lastName).toEqual('Lynch')
    expect(person.getFullName()).toEqual('Zachary Lynch')
  })
})
