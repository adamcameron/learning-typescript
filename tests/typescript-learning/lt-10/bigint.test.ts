import * as BigIntLib from '@/typescript-learning/lt-10/bigint'
import { describe, it, expect } from 'vitest'

describe('Tests of BigInt behaviour', () => {
  const bigIntComparator: (n: BigIntLib.numeric) => BigIntLib.numeric = (
    n: BigIntLib.numeric
  ): BigIntLib.numeric => BigInt(n)
  const numberComparator: (n: BigIntLib.numeric) => BigIntLib.numeric = (
    n: BigIntLib.numeric
  ): BigIntLib.numeric => n

  it.each([
    ['bigint', 'bigint', BigInt(29), BigInt(13), bigIntComparator],
    ['number', 'number', 29, 13, numberComparator],
    ['bigint', 'number', BigInt(29), 13, bigIntComparator],
    ['number', 'bigint', 29, BigInt(13), bigIntComparator],
  ])(
    'adds %s to %s',
    (
      t1: string,
      t2: string,
      x: BigIntLib.numeric,
      y: BigIntLib.numeric,
      comparator: (n: BigIntLib.numeric) => BigIntLib.numeric
    ) => {
      expect(BigIntLib.add(x, y)).toBe(comparator(42))
    }
  )
})
