export class TranslatedNumber {
  constructor(
    public value: number,
    public translation: string
  ) {}
}

export class ReadonlyTranslatedNumber extends TranslatedNumber {
  constructor(
    public readonly value: number,
    public readonly translation: string
  ) {
    super(value, translation)
  }
}
