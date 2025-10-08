import { TranslatedNumber } from './TranslatedNumber'

export type OptionalTranslatedNumber = Partial<TranslatedNumber>

export function makesMaoriNumber(
  value: number,
  name: string
): Partial<TranslatedNumber> {
  return { value, mi: name }
}
