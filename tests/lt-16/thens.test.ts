import { logSomeThens } from '@/lt-16/thens'
import { toHaveLogSequence } from './logMatchers'
import { describe, expect, it, vi, beforeAll } from 'vitest'

describe('Testing then behaviour', () => {
  beforeAll(() => {
    expect.extend({
      toHaveLogSequence: toHaveLogSequence,
    })
  })

  it('shows that then handlers are run after the async calls is made, and the mainline code does not wait', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    await logSomeThens()

    expect(consoleSpy).toHaveLogSequence([
      /\(\d{1,2}ms\) After fetch/,
      /\(\d{1,2}ms\) After thens/,
      /\(\d{4,}ms\) In first then/,
      /\(\d{4,}ms\) In fourth then/,
    ])
  })
})
