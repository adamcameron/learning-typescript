import { justAwaits } from '@/lt-16/asyncAwait'
import { toHaveLogSequence } from './logMatchers'
import { lapToConsole, reset } from '@/lt-16/lap'
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

    lapToConsole('Before justAwaits')
    const response = await justAwaits()
    lapToConsole('After justAwaits')
    expect(response.ok).toBe(true)
    const body = await response.text()
    expect(body).toEqual('OK after 1000ms')

    expect(consoleSpy).toHaveLogSequence([
      /\(\d{1,2}ms\) Before justAwaits/,
      /\(\d{3,}ms\) After justAwaits/,
    ])
  })
})
