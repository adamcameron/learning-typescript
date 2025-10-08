import { willBeRejected, willBeRejectedWithoutException } from '@/lt-16/reject'
import { toHaveLogSequence } from '../shared/logMatchers'
import { lapToConsole, reset } from '@/shared/lap'
import { ResponseError } from '@/shared/ResponseError'
import { describe, expect, it, vi, beforeAll, beforeEach } from 'vitest'

describe('Testing reject behaviour', () => {
  beforeAll(() => {
    expect.extend({
      toHaveLogSequence: toHaveLogSequence,
    })
  })

  beforeEach(() => {
    reset()
  })

  it('tests rejection', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    const response = willBeRejected()
    lapToConsole('After willBeRejected')

    await response.catch(async (error: ResponseError) => {
      lapToConsole(`Caught in mainline: [${await error.response.text()}]`)
    })
    lapToConsole('After catch')

    expect(consoleSpy).toHaveLogSequence([
      /\(\d{1,2}ms\) After thens/,
      /\(\d{1,2}ms\) After willBeRejected/,
      /\(\d{3,}ms\) In first then/,
      /\(\d{3,}ms\) Response status: \[500\]/,
      /\(\d{3,}ms\) Caught in mainline: \[Internal Server Error\]/,
      /\(\d{3,}ms\) After catch/,
    ])
  })

  it("tests rejection that doesn't receive an exception", async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation(() => {})

    const response = willBeRejectedWithoutException()

    const handled = await response.catch(async (data: Response) => {
      lapToConsole('In mainline catch')
      const rejectedResponseText: string = await data.text()

      const resolutionText = `Handling gracefully: [${rejectedResponseText}]`
      lapToConsole(resolutionText)
      return resolutionText
    })
    lapToConsole(`Received by mainline: [${handled}]`)

    expect(consoleSpy).toHaveLogSequence([
      /\(\d{1,2}ms\) After thens/,
      /\(\d{3,}ms\) In first then/,
      /\(\d{3,}ms\) In mainline catch/,
      /\(\d{3,}ms\) Handling gracefully: \[Internal Server Error\]/,
      /\(\d{3,}ms\) Received by mainline: \[Handling gracefully: \[Internal Server Error\]\]/,
    ])
  })
})
