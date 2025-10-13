import { describe, it, expect } from 'vitest'
import { getNodeVersion } from '@/typescript-learning/lt-8/baseline'

describe('tests vitest is operational and test TS code', () => {
  it('should return the current Node.js version', () => {
    const version = getNodeVersion()
    expect(version).toMatch(/^v24\.\d+\.\d+/)
  })
})
