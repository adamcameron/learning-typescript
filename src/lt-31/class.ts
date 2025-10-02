const maoriNumbers = ['tahi', 'rua', 'toru', 'wha']
let current = 0
function* generator() {
  while (current < maoriNumbers.length) {
    yield maoriNumbers[current++]
  }
  throw new Error('No more Maori numbers')
}

function maoriSequence(
  target: typeof Number,
  context: ClassDecoratorContext<typeof Number>
) {
  void context

  return class extends target {
    _value = generator().next().value as string
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
