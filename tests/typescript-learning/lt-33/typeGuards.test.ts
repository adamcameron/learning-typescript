import {
  extractNumber,
  MaoriNumber,
  TaggedNumber,
  DualSizeNumber,
  StringableNumber,
  NumericNumber,
  NumberPair,
  StringKind,
  NumberKind,
  FallThrough,
  SafeNullNumber,
  StringNumber,
  NumberNumber,
  InMaori,
  InIrish,
  assertisIrish,
} from '@/typescript-learning/lt-33/typeGuards'
import { describe, expect, it } from 'vitest'

describe('Type guard tests', () => {
  describe('typeof type guards', () => {
    it('handles a string', () => {
      const input: string = 'rua'
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe('rua')
      expect(result.tag).toBe('typeof')
    })
    it('handles a number', () => {
      const input: number = 123
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe(123)
      expect(result.tag).toBe('typeof')
    })
  })

  describe('Truthiness narrowing', () => {
    it('handles a non-null SafeNullNumber', () => {
      const input: SafeNullNumber = new SafeNullNumber(123)
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe(123)
    })
    it('handles a null SafeNullNumber', () => {
      const input: SafeNullNumber = new SafeNullNumber()
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe(0)
      expect(result.tag).toBe('truthiness narrowing')
    })
  })

  describe('Equality narrowing', () => {
    it('handles a valid MaoriNumber', () => {
      const one: MaoriNumber = new MaoriNumber('tahi')
      const result: TaggedNumber = extractNumber(one)

      expect(result.value).toBe('tahi')
    })

    it('handles an invalid MaoriNumber', () => {
      const five: MaoriNumber = new MaoriNumber('rima')

      expect(() => {
        extractNumber(five)
        expect.fail('Should not get to this')
      }).toThrowError(Error('rima is not one of tahi, rua, toru, wha'))
    })
  })

  describe('The in operator narrowing', () => {
    it('handles string StringableNumber', () => {
      const input: StringableNumber = { asString: () => 'toru' }
      const result = extractNumber(input)

      expect(result.value).toBe('toru')
      expect(result.tag).toBe('in operator asString')
    })

    it('handles number NumericNumber', () => {
      const input: NumericNumber = { asNumber: () => 123 }
      const result = extractNumber(input)

      expect(result.value).toBe(123)
      expect(result.tag).toBe('in operator asNumber')
    })
    it('handles number NumberPair', () => {
      const input: NumberPair = new NumberPair(123, 'wha')
      const result = extractNumber(input)

      expect(result.value).toBe(123)
      expect(result.tag).toBe('in operator asNumber')

      expect(input.asString()).toBe('wha')
    })
  })

  describe('instanceof narrowing', () => {
    it('handles number DualSizeNumber', () => {
      const input: DualSizeNumber = new DualSizeNumber(123)
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe(123)
      expect(result.tag).toBe('instanceof with typeof number')
    })
    it('handles bigint DualSizeNumber', () => {
      const input: DualSizeNumber = new DualSizeNumber(
        BigInt(Number.MAX_SAFE_INTEGER + 1)
      )

      expect(() => extractNumber(input)).toThrowError(
        new Error('Unsupported type')
      )
    })
    it('handles StringNumber', () => {
      const input: StringNumber = new StringNumber('whitu')
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe('whitu')
      expect(result.tag).toBe('instanceof StringNumber')
    })
    it('handles NumberNumber', () => {
      const input: NumberNumber = new NumberNumber(123)
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe(123)
      expect(result.tag).toBe('instanceof NumberNumber')
    })
    it('handles InMaori', () => {
      const input: InMaori = new InMaori('iwa')
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe('iwa')
      expect(result.tag).toBe('instanceOf InMaori')
    })
  })

  describe('Type predicates', () => {
    it.each(['rua', 'toru', 'wha'])(
      'accepts %s as a Maori number',
      (s: string) => {
        const input: MaoriNumber = new MaoriNumber(s)
        const result: TaggedNumber = extractNumber(input)

        expect(result.value).toBe(s)
        expect(result.tag).toBe('instanceof MaoriNumber')
      }
    )
    it('does not accept rima as a Maori number', () => {
      const input: MaoriNumber = new MaoriNumber('rima')
      expect(() => extractNumber(input)).toThrowError(
        Error('rima is not one of tahi, rua, toru, wha')
      )
    })
  })

  describe('assertion', () => {
    it('can be used to assert the unambiguity of a type', () => {
      const input: InIrish = new InIrish('ocht')
      const result: TaggedNumber = extractNumber(input)

      expect(result.value).toBe('ocht')
      expect(result.tag).toBe('asserts')
    })

    it('errors out if the InnableNumber is not an InIrish', () => {
      const input: InMaori = new InMaori('tekau')
      expect(() => {
        assertisIrish(input)
      }).toThrowError(new Error('Not an Irish number'))
    })
  })

  describe('Discriminated unions', () => {
    it('accepts a string kind', () => {
      const input: StringKind = { kind: 'string', value: 'ono' }
      const result: TaggedNumber = extractNumber(input)
      expect(result.value).toBe('ono')
      expect(result.tag).toBe('discriminated union with StringKind')
    })
    it('accepts a number kind', () => {
      const input: NumberKind = { kind: 'number', value: 6 }
      const result: TaggedNumber = extractNumber(input)
      expect(result.value).toBe(6)
      expect(result.tag).toBe('discriminated union with NumberKind')
    })
  })

  describe('Unsupported cases', () => {
    it('rejects a FallThrough', () => {
      expect(() => extractNumber(new FallThrough())).toThrowError(
        new Error('Unsupported type')
      )
    })

    it('errors-out with a bigint at runtime', () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      const input: Function = () => {
        const input: bigint = BigInt(Number.MAX_SAFE_INTEGER + 1)
        extractNumber(input as unknown as number)
      }
      expect(input).not.toThrowError(new Error('Unsupported type'))
      expect(input).toThrow(
        "Cannot use 'in' operator to search for 'asNumber' in 9007199254740992"
      )
    })
  })
})
