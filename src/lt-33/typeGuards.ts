//import { strict as assert } from 'assert'

export interface StringableNumber {
  asString(): string
}

export interface NumericNumber {
  asNumber(): number
}

export class NumberPair implements StringableNumber, NumericNumber {
  constructor(
    private n: number,
    private s: string
  ) {}
  asString(): string {
    return this.s
  }
  asNumber(): number {
    return this.n
  }
}

export interface StringKind {
  kind: 'string'
  value: string
}
export interface NumericKind {
  kind: 'number'
  value: number
}
export interface BigIntKind {
  kind: 'bigint'
  value: bigint
}

// Discriminated unions
export type NumberKind = StringKind | NumericKind

export class StringNumber {
  constructor(private s: string) {}
  getValue(): string {
    return this.s
  }
}

export class NumberNumber {
  constructor(private n: number) {}
  getValue(): number {
    return this.n
  }
}

export class DualSizeNumber {
  constructor(private _value: number | bigint) {}

  get value(): number | bigint {
    return this._value
  }

  getType(): string {
    return typeof this._value
  }
}

export class SafeNullNumber {
  constructor(private _value: number | null = null) {}

  get value(): number {
    //return this._value //  Type 'null' is not assignable to type 'number'

    // Truthiness narrowing
    if (this._value) {
      return this._value
    }
    return 0
  }
  get original(): number | null {
    return this._value
  }
}

type valids = 'tahi' | 'rua' | 'toru' | 'wha'
export class MaoriNumber {
  constructor(private _value: string) {}

  get value(): valids {
    //return this._value // Type 'string' is not assignable to type 'valids'

    // Equality narrowing
    if (this._value === 'tahi') {
      return this._value
    }

    // type predicates
    // return this._value //Type 'string' is not assignable to type 'valids'
    if (this.isValid(this._value)) {
      return this._value
    }
    throw new Error(`${this._value} is not one of tahi, rua, toru, wha`)
  }

  // type predicates
  isValid(value: string): value is valids {
    return ['tahi', 'rua', 'toru', 'wha'].indexOf(value) !== -1
  }
}

abstract class InnableNumber {
  constructor(protected value: string) {}
}

export class InMaori extends InnableNumber {
  inMi() {
    return this.value
  }
}
export class InIrish extends InnableNumber {
  inIe() {
    return this.value
  }
}

export class FallThrough {
  // needs a property otherwise TS can mistakenly think a BigInt is one of these.
  public something: any = '' // eslint-disable-line @typescript-eslint/no-explicit-any
}

export class TaggedNumber {
  constructor(
    public value: string | number,
    public tag: string
  ) {}
}

export type ExtractableNumber =
  | StringableNumber
  | NumericNumber
  | StringNumber
  | NumberNumber
  | NumberPair
  | number
  | string
  | DualSizeNumber
  | SafeNullNumber
  | MaoriNumber
  | NumberKind
  | InnableNumber
  | FallThrough

export function extractNumber(value: ExtractableNumber): TaggedNumber {
  // return value // Type 'ExtractableNumber' is not assignable to type 'string | number'. (etc)

  // typeof guard
  if (typeof value === 'number') {
    return new TaggedNumber(value, 'typeof')
  }
  if (typeof value === 'string') {
    return new TaggedNumber(value, 'typeof')
  }

  // return value.asNumber() // Property 'asNumber' does not exist on type 'NumberPair | etc
  // in operator
  if ('asNumber' in value) {
    return new TaggedNumber(value.asNumber(), 'in operator asNumber')
  }
  if ('asString' in value) {
    return new TaggedNumber(value.asString(), 'in operator asString')
  }

  // return value.getValue() //  Property 'getValue' does not exist on type 'StringNumber | etc

  // instanceof guard
  if (value instanceof StringNumber) {
    return new TaggedNumber(value.getValue(), 'instanceof StringNumber')
  }
  if (value instanceof NumberNumber) {
    return new TaggedNumber(value.getValue(), 'instanceof NumberNumber')
  }
  if (value instanceof MaoriNumber) {
    return new TaggedNumber(value.value, 'instanceof MaoriNumber')
  }

  // can't do the above like this:
  /*
  switch (true) {
    case value instanceof StringNumber:
      return new TaggedNumber(value.getValue(), 'instanceof')
    case value instanceof NumberNumber:
      return new TaggedNumber(value.getValue(), 'instanceof')
    case value instanceof MaoriNumber:
      return new TaggedNumber(value.value, 'instanceof') // Property 'value' does not exist on type 'never'.
  }
  */

  if (value instanceof DualSizeNumber) {
    const innerValue: bigint | number = value.value
    //return new TaggedNumber(innerValue, '') // Type 'bigint' is not assignable to type 'string | number'.
    const type = value.getType()
    if (typeof innerValue === 'number') {
      return new TaggedNumber(innerValue, `instanceof with typeof ${type}`)
    }
    throw new Error('Unsupported type')
  }

  if (value instanceof SafeNullNumber) {
    return new TaggedNumber(
      value.value,
      value.original === null
        ? 'truthiness narrowing'
        : 'instanceof SafeNullNumber'
    )
  }

  if ('kind' in value) {
    // Discriminated unions
    if (value.kind === 'string') {
      //const innerValue: number = value.value // Type 'string' is not assignable to type 'number'.
      const innerValue: string = value.value
      return new TaggedNumber(innerValue, 'discriminated union with StringKind')
    }

    const innerValue: number = value.value
    return new TaggedNumber(innerValue, 'discriminated union with NumberKind')
  }

  if (value instanceof InnableNumber) {
    if (value instanceof InMaori) {
      return new TaggedNumber(value.inMi(), 'instanceOf InMaori')
    }
    assertisIrish(value)
    return new TaggedNumber(value.inIe(), 'asserts')
  }

  throw new Error('Unsupported type')
}

export function assertisIrish(value: InnableNumber): asserts value is InIrish {
  if (!('inIe' in value)) {
    throw new Error('Not an Irish number')
  }
}
