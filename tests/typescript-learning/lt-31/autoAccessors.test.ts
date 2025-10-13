import { Person } from '@/typescript-learning/lt-31/autoAccessors'
import { describe, expect, it, vi } from 'vitest'

describe('Testing auto accessor decoration', () => {
  it('should log the setters being called', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    new Person('Zachary', 'Lynch')

    expect(consoleSpy).toHaveBeenCalledWith(
      '[firstName] setter called with value [Zachary]'
    )
    expect(consoleSpy).toHaveBeenCalledWith(
      '[lastName] setter called with value [Lynch]'
    )
  })

  it('should log the getters being called', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const person = new Person('Zachary', 'Lynch')

    expect(person.getFullName()).toBe('Zachary Lynch')
    expect(consoleSpy).toHaveBeenCalledWith('[firstName] getter called')
    expect(consoleSpy).toHaveBeenCalledWith('[lastName] getter called')
  })
})
