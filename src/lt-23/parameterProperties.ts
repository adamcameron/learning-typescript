export class TranslatedNumber {
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
}
