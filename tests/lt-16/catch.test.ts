import { failingCall } from '@/lt-16/catch'
import { toHaveLogSequence, toHaveLogEntry } from './logMatchers'
import { reset } from '@/lt-16/lap'
import { describe, expect, it, vi, beforeAll, beforeEach } from 'vitest'

describe('Testing catch behaviour', () => {
  beforeAll(() => {
    expect.extend({
      toHaveLogSequence: toHaveLogSequence,
      toHaveLogEntry: toHaveLogEntry,
    })
  })

  beforeEach(() => {
    reset()
  })

  it('shows that catch() will catch an error', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    await failingCall()

    expect(consoleSpy).toHaveLogSequence([
      /\(\d{1,2}ms\) After thens/,
      /\(\d{3,}ms\) In first then/,
      /\(\d{3,}ms\) Response status: \[500\]/,
      /\(\d{3,}ms\) Error caught: \[Bad response: Internal Server Error\]/,
    ])

    expect(consoleSpy).not.toHaveLogEntry(/\(\d+ms\) Should not get this/)
  })
})
