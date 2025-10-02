function obscurer(
  originalMethod: (this: PassPhrase) => string,
  context: ClassGetterDecoratorContext
) {
  void context
  function replacementMethod(this: PassPhrase) {
    const duplicateOfThis: PassPhrase = Object.assign(
      Object.create(Object.getPrototypeOf(this) as PassPhrase),
      this,
      { _text: this._text.replace(/./g, '*') }
    ) as PassPhrase

    return originalMethod.call(duplicateOfThis)
  }

  return replacementMethod
}

export class PassPhrase {
  constructor(protected _text: string) {}

  get plainText(): string {
    return this._text
  }

  @obscurer
  get obscuredText(): string {
    return this._text
  }
}
