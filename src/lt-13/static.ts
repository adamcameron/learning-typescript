export class TranslatedNumber {
  public static supported: string[] = ['en', 'mi']

  constructor(
    private value: number,
    private en: string,
    private mi: string
  ) {}

  getAll(): { value: number; en: string; mi: string } {
    return {
      value: this.value,
      en: this.en,
      mi: this.mi,
    }
  }

  static fromTuple<T extends typeof TranslatedNumber>(
    this: T,
    values: [value: number, en: string, mi: string]
  ): InstanceType<T> {
    return new this(...values) as InstanceType<T>
  }
}

export class ShoutyTranslatedNumber extends TranslatedNumber {
  constructor(value: number, en: string, mi: string) {
    super(value, en.toUpperCase(), mi.toUpperCase())
  }
}
