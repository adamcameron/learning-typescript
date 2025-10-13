export class Colour {
  constructor(
    protected readonly en: string,
    protected readonly mi: string,
    protected readonly ie: string
  ) {}

  getAllAsTuple(): [string, string, string] {
    return [this.en, this.mi, this.ie]
  }
}

export class ShoutyColour extends Colour {
  getAllAsTuple(): [string, string, string] {
    const [en, mi, ie] = super.getAllAsTuple()

    return [en.toUpperCase(), mi.toUpperCase(), ie.toUpperCase()]
  }
}
