type NullableString = string | null

export class Base {
  baseProperty: NullableString
  private reversedProperty: NullableString
  private _accessibleProperty: NullableString = null

  constructor(baseProperty: NullableString = null) {
    this.baseProperty = baseProperty
    this.reversedProperty = baseProperty?.split('').reverse().join('') ?? null
  }

  public returnReversedProperty(): NullableString {
    return this.reversedProperty
  }

  get accessibleProperty(): NullableString {
    return this._accessibleProperty
  }
  set accessibleProperty(value: string) {
    this._accessibleProperty = value.split('').reverse().join('')
  }
}

export class Sub extends Base {
  subProperty: NullableString

  constructor(
    baseProperty: NullableString = null,
    subProperty: NullableString = null,
    private _shortHandProperty: NullableString = null
  ) {
    super(baseProperty)
    this.subProperty = subProperty
  }

  get shortHandProperty(): NullableString {
    return this._shortHandProperty
  }

  set shortHandProperty(value: string) {
    this._shortHandProperty = value.split('').reverse().join('')
  }
}
