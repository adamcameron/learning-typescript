import { toHaveLogSequence, toHaveLogEntry } from './logMatchers'
import { describe, expect, it, vi, beforeAll } from 'vitest'

describe('Testing logging matchers', () => {
  beforeAll(() => {
    expect.extend({
      toHaveLogSequence: toHaveLogSequence,
      toHaveLogEntry: toHaveLogEntry,
    })
  })

  it('verifies toHaveLogSequence works', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    console.log('tahi')
    console.log('rua')
    console.log('toru')
    console.log('wha')

    expect(consoleSpy).toHaveLogSequence([/tahi/, /rua/, /toru/, /wha/])
  })

  it('verifies toHaveLogSequence works with a miss', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    console.log('tahi')
    console.log('toru')
    console.log('wha')

    try {
      expect(consoleSpy).toHaveLogSequence([/tahi/, /rua/, /toru/, /wha/])
      expect.fail('should not get to here')
    } catch (e: unknown) {
      expect((e as Error).message).toEqual(
        'Expected ["tahi","toru","wha"] to contain each of ["/tahi/","/rua/","/toru/","/wha/"] in order'
      )
    }
  })

  it('verifies .not.toHaveLogSequence works with a miss', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    console.log('tahi')
    console.log('rua')
    console.log('toru')
    console.log('wha')

    try {
      expect(consoleSpy).not.toHaveLogSequence([/tahi/, /rua/, /toru/, /wha/])
      expect.fail('should not get to here')
    } catch (e: unknown) {
      expect((e as Error).message).toEqual(
        'Expected ["tahi","rua","toru","wha"] to not contain each of ["/tahi/","/rua/","/toru/","/wha/"] in order'
      )
    }
  })

  it('verifies toHaveLogEntry works', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    console.log('tahi')
    console.log('rua')
    console.log('toru')
    console.log('wha')

    expect(consoleSpy).toHaveLogEntry(/toru/)
  })

  it('verifies toHaveLogEntry works with a miss', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    console.log('tahi')
    console.log('rua')
    console.log('wha')

    try {
      expect(consoleSpy).toHaveLogEntry(/toru/)
      expect.fail('should not get to here')
    } catch (e: unknown) {
      expect((e as Error).message).toEqual(
        'Expected ["tahi","rua","wha"] to contain /toru/'
      )
    }
  })

  it('verifies not.toHaveLogEntry works', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    console.log('tahi')
    console.log('rua')
    console.log('wha')

    expect(consoleSpy).not.toHaveLogEntry(/toru/)
  })

  it('verifies not.toHaveLogEntry works with a miss', () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    console.log('tahi')
    console.log('rua')
    console.log('toru')
    console.log('wha')

    try {
      expect(consoleSpy).not.toHaveLogEntry(/toru/)
      expect.fail('should not get to here')
    } catch (e: unknown) {
      expect((e as Error).message).toEqual(
        'Expected ["tahi","rua","toru","wha"] not to contain /toru/'
      )
    }
  })
})
