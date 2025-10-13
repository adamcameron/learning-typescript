/* eslint-disable @typescript-eslint/no-empty-object-type, @typescript-eslint/no-explicit-any */
import 'vitest'

interface CustomMatchers<R = unknown> {
  toHaveLogEntry: (expected: RegExp) => R
  toHaveLogSequence: (expected: RegExp[]) => R
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
