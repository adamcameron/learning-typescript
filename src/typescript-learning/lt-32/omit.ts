import { TranslatedNumber } from './TranslatedNumber'

export type MaoriNumber = Omit<TranslatedNumber, 'en' | 'ie'>

export function makesMaoriNumber(
  value: number,
  name: string
): Omit<TranslatedNumber, 'en' | 'ie'> {
  return { value, mi: name }
}
