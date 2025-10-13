export abstract class TranslatedTerm {
  constructor(
    protected readonly term: string,
    protected readonly translation: string
  ) {}

  abstract getTranslation(): string
}

export class MaoriColour extends TranslatedTerm {
  constructor(en: string, mi: string) {
    super(en, mi)
  }

  getTranslation(): string {
    return `The colour ${this.term} in Maori is ${this.translation}`
  }
}

export class IrishWeekday extends TranslatedTerm {
  constructor(en: string, ie: string) {
    super(en, ie)
  }

  getTranslation(): string {
    return `The day ${this.term} in Irish is ${this.translation}`
  }
}
