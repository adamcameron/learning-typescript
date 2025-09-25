export enum MaoriNumber {
  Tahi = 'one',
  Rua = 'two',
  Toru = 'three',
  Wha = 'four',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace MaoriNumber {
  export function fromValue(value: string): MaoriNumber {
    const valueAsMaoriNumber: MaoriNumber = value as MaoriNumber
    const enumKeysOnly = Object.keys(MaoriNumber).filter(
      (key) =>
        typeof MaoriNumber[key as keyof typeof MaoriNumber] !== 'function'
    )
    const elementName: string =
      enumKeysOnly[Object.values(MaoriNumber).indexOf(valueAsMaoriNumber)]
    const typedElementName = elementName as keyof typeof MaoriNumber

    return MaoriNumber[typedElementName] as MaoriNumber
  }
}
