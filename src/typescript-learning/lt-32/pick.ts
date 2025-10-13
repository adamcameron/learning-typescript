import { TranslatedNumber } from './TranslatedNumber'

export type IrishNumber = Pick<TranslatedNumber, 'value' | 'ie'>

export function makesIrishNumber(
  value: number,
  name: string
): Pick<TranslatedNumber, 'value' | 'ie'> {
  return { value, ie: name }
}
