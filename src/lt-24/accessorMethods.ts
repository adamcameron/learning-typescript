type NullableString = string | null
type NullableStringPromise = Promise<string> | null
type NullableNumber = number | null

export class Something {
  private _accessibleProperty: NullableString = null

  constructor(private _shortHandProperty: NullableString = null) {}

  get accessibleProperty(): NullableString {
    return this._accessibleProperty
  }

  set accessibleProperty(value: string) {
    this._accessibleProperty = this.reverseString(value)
  }

  get shortHandProperty(): NullableString {
    return this._shortHandProperty
  }

  set shortHandProperty(value: string) {
    this._shortHandProperty = this.reverseString(value)
  }

  private reverseString(s: string): string {
    return s.split('').reverse().join('')
  }
}

export class Account {
  private _hashedPassword: NullableStringPromise = null

  constructor(
    private firstName: string,
    private lastName: string
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  set password(value: string) {
    this._hashedPassword = this.hashPassword(value)
  }

  private async hashPassword(password: string) {
    const encoder = new TextEncoder()
    const data = encoder.encode(password)
    const hash = await crypto.subtle.digest('SHA-256', data)
    const hashAsString = Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')

    return hashAsString
  }

  placateCompiler(): NullableStringPromise {
    return this._hashedPassword
  }
}

export class NaturalNumber {
  constructor(private _value: NullableNumber) {}

  get value(): NullableNumber {
    return this._value
  }

  set value(value: number) {
    if (value < 1) {
      throw new RangeError(`value [${value}] must be >= 1`)
    }
    this._value = value
  }
}
