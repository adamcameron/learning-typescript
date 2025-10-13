import { justFetches } from '@/typescript-learning/lt-16/asyncAwait'
import { toHaveLogSequence } from '../shared/logMatchers'
import { lapToConsole, reset } from '@/typescript-learning/shared/lap'
import { describe, expect, it, vi, beforeAll, beforeEach } from 'vitest'

describe('Testing async/await behaviour', () => {
  beforeAll(() => {
    expect.extend({
      toHaveLogSequence: toHaveLogSequence,
    })
  })

  beforeEach(() => {
    reset()
  })

  it('uses async/await instead of all that promise nonsense', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    lapToConsole('Before justFetches')
    const response = await justFetches()
    lapToConsole('After justFetches')
    expect(response.ok).toBe(true)
    const body = await response.text()
    expect(body).toEqual('OK after 1000ms')

    expect(consoleSpy).toHaveLogSequence([
      /\(\d{1,2}ms\) Before justFetches/,
      /\(\d{3,}ms\) After justFetches/,
    ])
  })
})
