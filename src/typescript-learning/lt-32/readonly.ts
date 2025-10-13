import { TranslatedNumber } from './TranslatedNumber'

export function toTranslatedNumber(
  value: number,
  en: string,
  mi: string,
  ie: string
): TranslatedNumber {
  return { value, en, mi, ie }
}

export function toReadonlyTranslatedNumber(
  n: TranslatedNumber
): Readonly<TranslatedNumber> {
  return n
}

export type ReadonlyTranslatedNumber = Readonly<TranslatedNumber>
