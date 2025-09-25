import {
  throwsError,
  throwsMyError,
  MyError,
  throwsMyDetailedError,
  MyDetailedError,
  throwsString,
  throwsSyntaxError,
  throwsErrorWithCause,
} from '@/lt-12/errors'
import { describe, it, expect } from 'vitest'
import { AssertionError } from 'assert'

describe('testing errors', () => {
  it('is catchable by type', () => {
    try {
      throwsError('error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof Error) {
        return expect(e.message).toBe('error message')
      }
      throw e
    }
  })

  it('can be a subclass of Error', () => {
    try {
      throwsMyError('my error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof MyError) {
        return expect(e.message).toBe('my error message')
      }
      throw e
    }
  })

  it('has a constructor.name property', () => {
    try {
      throwsMyError('my error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof MyError) {
        return expect(e.constructor.name).toBe('MyError')
      }
      throw e
    }
  })

  it('has a stack trace', () => {
    try {
      throwsMyError('my error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof MyError) {
        expect(e.stack).toContain('Error: my error message')
        expect(e.stack).toContain('tests/lt-12/errors.test.ts')
        return
      }
      throw e
    }
  })

  it('can have methods on the subclass', () => {
    try {
      throwsMyDetailedError('my error message', 'my detail')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof MyDetailedError) {
        expect(e.message).toBe('my error message')
        expect(e.detail).toBe('my detail')
        return
      }
      throw e
    }
  })

  it('can throw a string', () => {
    try {
      throwsString('my string error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (typeof e == 'string') {
        expect(e).toEqual('my string error message')
        return
      }
      throw e
    }
  })

  it('can throw built-in errors', () => {
    try {
      throwsSyntaxError('my syntax error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof SyntaxError) {
        expect(e.message).toEqual('my syntax error message')
        return
      }
      throw e
    }
  })

  it('can throw an error with a cause', () => {
    try {
      throwsErrorWithCause('my cause error message', 'my error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof Error) {
        expect(e.message).toEqual('my error message')

        const cause: Error = e.cause as Error
        expect(cause.message).toEqual('my cause error message')
        return
      }
      throw e
    }
  })

  it('can JSONify an Error object if one takes a circuitous route', () => {
    try {
      throwsErrorWithCause('my cause error message', 'my error message')
      expect.fail("shouldn't get to here")
    } catch (e: unknown) {
      if (e instanceof AssertionError) {
        throw e
      }
      if (e instanceof Error) {
        const json: string = JSON.stringify(e)
        expect(json).toEqual('{}')
        const jsonWithProps: string = JSON.stringify(
          e,
          Object.getOwnPropertyNames(e)
        )
        expect(jsonWithProps).toContain('my error message')
        expect(jsonWithProps).toContain('my cause error message')
        expect(jsonWithProps).toContain('stack')
        expect(jsonWithProps).toContain('tests/lt-12/errors.test.ts')
        return
      }
      throw e
    }
  })
})
