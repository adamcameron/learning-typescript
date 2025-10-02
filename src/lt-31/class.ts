const maoriNumbers = ['tahi', 'rua', 'toru', 'wha']


function maoriSequence(
  target: typeof Number,
  context: ClassDecoratorContext<typeof Number>
) {
  void context

  return class extends target {
    private _current = 0

    constructor(...args: any[]) {
      super(...args)
      this._value = this.generator().next().value as string
    }

    private *generator() {
      while (this._current < maoriNumbers.length) {
        yield maoriNumbers[this._current++]
      }
      throw new Error('No more Maori numbers')
    }
  }
}

type NullableString = string | null

@maoriSequence
export class Number {
  constructor(protected _value: NullableString = null) {}

  get value(): NullableString {
    return this._value
  }
}
