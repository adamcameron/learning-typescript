interface Stringable {
  toString(): string
}

export class MaoriNumber implements Stringable {
  constructor(
    private _name: string,
    private _value: number
  ) {}

  get name(): string {
    return this._name
  }

  get value(): number {
    return this._value
  }

  toString(): string {
    return this._name
  }

  inMi(): string {
    return this._name
  }
}

export class IrishNumber implements Stringable {
  constructor(
    private _name: string,
    private _value: number
  ) {}

  get name(): string {
    return this._name
  }

  get value(): number {
    return this._value
  }

  toString(): string {
    return this._name
  }

  inIe(): string {
    return this._name
  }
}

export function returnsMaoriOrIrishNumber(
  value: BothNumberTypes
): BothNumberTypes {
  return value
}

export type BothNumberTypes = MaoriNumber | IrishNumber
