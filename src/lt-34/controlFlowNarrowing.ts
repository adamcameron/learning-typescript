export class NumericNumber {
  constructor(private _value: number) {}

  get asNumber() {
    return `${this._value}`
  }
}
export class StringNumber {
  constructor(private _value: string) {}

  get asString() {
    return this._value
  }
}

export function resolvesNumber(value: NumericNumber | StringNumber): string {
  //return value.asString // Property 'asString' does not exist on type 'NumericNumber'
  if (value instanceof NumericNumber) {
    return value.asNumber
  }
  return value.asString
}
