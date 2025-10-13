export enum WholeNumber {
  Zero,
  One,
  Two,
  Three,
  Four,
}

export enum NaturalNumber {
  One = 1,
  Two,
  Three,
  Four,
}

export enum PrimeNumber {
  Two = 2,
  Three = 3,
  Five = 5,
  Seven = 7,
}

export enum MaoriNumber {
  Tahi = 'one',
  Rua = 'two',
  Toru = 'three',
  Wha = 'four',
}

export enum ConstLiteralNumberImplementation {
  One = 1,
  Two = One + 1,
  Three = Two + 1,
  Four = One + 3,
  Five = Two + Three,
}

export function takesMaoriNumber(n: MaoriNumber): string {
  return n.toString()
}

export function returnsMaoriNumber(n: string): MaoriNumber {
  const s: keyof typeof MaoriNumber = n as keyof typeof MaoriNumber
  return MaoriNumber[s]
}

export function getMaoriNumberFromValue(value: string): MaoriNumber {
  const valueAsMaoriNumber: MaoriNumber = value as MaoriNumber
  const elementName: string =
    Object.keys(MaoriNumber)[
      Object.values(MaoriNumber).indexOf(valueAsMaoriNumber)
    ]
  const typedElementName = elementName as keyof typeof MaoriNumber

  const e: MaoriNumber = MaoriNumber[typedElementName]

  return e
}
